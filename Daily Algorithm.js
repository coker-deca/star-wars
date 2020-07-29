// const shiftedDiff = (first, second) => {
//     let lengthOfString = first.length;
//     if (lengthOfString !== second.length) return -1; 
//     else{
//         let count = 0;
//         for (let i = 0; i < lengthOfString; i++){
//             if (first === second) return count;
//             else{
//                 let rotate =first.split("");
//                 rotate.unshift(rotate.pop());
//                 first = rotate.join("");
//                 count++;
//             }
//         }
//       return -1;
//     }
// };



// const shiftedDiff = (first, second) => {
//     let lengthOfString = first.length;
//     if (lengthOfString !== second.length) return -1; 
//     else{
//         let count = 0;
//         for (let i = 0; i < lengthOfString; i++){
//             if (first === second) console.log(count);
//             else{
//                 first = first[lengthOfString-1] + first.substring(0,lengthOfString-2);
//                 count++;
//             }
//         }
//         console.log (-1);
//     }
// };
// function getMiddle (str) {
//     let strlen = str.length;
//     if (strlen === 0) return 0;
//     else if (strlen % 2 === 0){
//       console.log(str);
//       let midstr = (strlen/2)-1;
//       return str.substring(midstr,midstr+2);
//     }else{
//       console.log(str);
//       console.log(strlen)
//       let midstr = ((strlen+1)/2)-1;
//       console.log(midstr);
//       return str.substring(midstr);
//     }
//   }

// console.log(getMiddle("testing"));
// shiftedDiff('coffee', 'eecoff');


// function findOutlier(integers){
//     //your code here
//     //identify the general parity of the array
//     let booltable = [0,0];
//     let result = 0;
//     integers.forEach(integer => (integer%2===0) ? booltable[0]++ : booltable[1]++);
//     //returning the outlying parity
//     console.log(booltable);
//     (booltable[0] === 1) ? result = integers.filter(integer => Math.abs(integer) % 2 === 0) 
//       : result = integers.filter(integer => Math.abs(integer) % 2 === 1); 
//       console.log(result);
//     return result[0];
// }

// console.log(findOutlier([2, -3, 6, 8]))

// function fizzBuzz (n) {
//     let result =""
//     for (let i = 1; i <= n; i++) {

//         if (i % 3 === 0 && i % 5 === 0) {
//             result += "FizzBuzz";
//         } else if (i % 3 === 0) {
//             result += "Fizz";
//         } else if (i % 5 === 0) {
//             result += "Buzz";
//         } else {
//             result += i;
//         }

//         if(i < n){
//             result+= "\n";
//         }
//     }
//     return result;
// }

// console.log (fizzBuzz(10));

let serItem = "Luk"

let searchItem = () => {
    search = serItem.trim();
    return search;
}
console.log(searchItem());