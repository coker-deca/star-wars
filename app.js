// Create the type of element you pass in the parameters
let createNode = element => document.createElement(element);

// Append the second parameter(element) to the first one
let append = (parent, el) => parent.appendChild(el);
let pop_container = document.querySelector('.pop_container')   
const serItem = document.querySelector('#search-text');
const buttonSer = document.querySelector('#search-button');

const ul = createNode("ul");

fetch('https://swapi.dev/api/people/?results')
  .then(response => response.json())
  .then(data => {
    appendData(data.results)
  })
  .catch(err => console.log(err));

let mainContainer = document.getElementById("populate");
let imageContainer = document.getElementById("first"); 


class User {
  constructor(par) {
    this.par = par;
  }
  get viewUser() {
    const {
      name,
      gender,
      height
    } = this.par
  return {
    name,
    gender,
    height
    }
  }
 }

// const searchFunction = (data) =>{
//     return data.name;
// }
  
  

function appendData(data) {
  
  let character = data; // Get the results
  character.filter((par) => {
    let li = createNode('li'), //  Create the elements we need
    p = createNode('p');
    
    if(par.name.startsWith(searchItem())){
      p.innerHTML = `${par.name}`; // Make the HTML of our span to be the first and last name of our author
    }
  let user = new User(par);
  let any = user.viewUser;
  // Create the elements we need
 
    p.addEventListener("click", () => {
      pop_container.innerHTML = `
      <div>
        <p class="close">&times;</p>
        <p class="char-name">Name: <strong>${any.name}</strong></p>
        <p>Gender: <strong>${any.gender}</strong></p>
        <p>Height: <strong>${any.height}</strong></p>
      </div> 
      `
      let only = document.querySelector('.close');
      only.onclick = () => {
      pop_container.style.display = "none";
      location.reload()
      } 
    });
    append(li, p),
    append(ul, li),
    append(mainContainer, ul)
  })
}

let searchItem = () => {
  search = serItem.value.trim();
  // console.log(search);
  return search;
}
// console.log(searchItem());
buttonSer.addEventListener("click", searchItem);