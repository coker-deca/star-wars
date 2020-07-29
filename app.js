// Create the type of element you pass in the parameters
let createNode = element => document.createElement(element);
const ul = createNode("ul");


// Append the second parameter(element) to the first one
let append = (parent, el) => parent.appendChild(el);

// Get the elements(the divs, search Input and search button) from the HTML
const pop_container = document.querySelector('.pop_container');
const serItem = document.querySelector('#search-text');
const buttonSer = document.querySelector('#search-button');
const mainContainer = document.getElementById("populate");
const imageContainer = document.getElementById("first"); 


// Initial call to populate the names of Characters
fetch('https://swapi.dev/api/people/?results')
  .then(response => response.json())
  .then(data => {
    appendData(data.results)
  })
  .catch(err => console.log(err));

// Create a User class that will assign all neccessary properties to every fetched name from above
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


 /* Main function to fetch and filter the names of Characters, 
    map the user details to each name 
    and append the list of names to div elements for display*/
function appendData(data) {
  let character = data; // Get the results
  character.filter((par) => {
    let li = createNode('li'), //  Create only the list elements we need neccessary to the filtered names
    p = createNode('p');
    
    p.innerHTML = `${par.name}`; // Make the HTML of our span to be the first and last name of our author

    // Calling get property on User
    let user = new User(par);
    let any = user.viewUser;
  
    // Responding to click on the name to bring up the details
    p.addEventListener("click", () => {
      pop_container.innerHTML = `
      <div>
        <p class="close">&times;</p>
        <p class="char-name">Name: <strong>${any.name}</strong></p>
        <p>Gender: <strong>${any.gender}</strong></p>
        <p>Height: <strong>${any.height}</strong></p>
      </div> 
      `

      // Creating to a close button
      let only = document.querySelector('.close');
      only.onclick = () => {
      pop_container.style.display = "none";
      location.reload()
      } 
    });
    append(li, p), // Append list the test paragraph to list item
    append(ul, li), // List item to unordered list group
    append(mainContainer, ul) // List group to MainContainer(the bigger container)
  })
}

/* Function to search through the fetch return to generate only names being searched for */
let searchItem =  () => {
  const list = document.getElementsByTagName("ul")[0]
  search = serItem.value.trim();
  fetch('https://swapi.dev/api/people/?results')
                  .then(_=>_.json())
                  .then(({results})=>{
                    const filt = filter(search,results)
                    list.innerHTML = ""
                    appendData(filt)
                  })
                  .catch((e)=>{
                    console.log("error occured",e)
                  })
}

// Button to submit search query
buttonSer.addEventListener("click", searchItem);

// Function to filter data and initialize to empty string
const filter = (arg = "",data)=>{
  const reg = new RegExp(arg,"ig")
  const filteredData =  data.filter((item)=>reg.test(item.name))
  return filteredData
}