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

// let serItem = "Luk"

// let searchItem = () => {
//     search = serItem.trim();
//     return search;
// }
// console.log(searchItem());

// function arrayPacking (integers) {
//     //Returning the binary values
//     let binaryValues = integers.map(integer => {
//         let binaryNo8Bit = integer.toString(2);
//         while(binaryNo8Bit.length<8)binaryNo8Bit="0"+binaryNo8Bit;
//         return binaryNo8Bit;
//     })
//     singleBinary = parseInt(binaryValues.reverse().join(""), 2);
//     return singleBinary.toString(10);
// }

// console.log(arrayPacking([24, 85, 0]))

const hasUniqueChars = s => {
  let count = 0;
  let arrayOfChar = [];
  for (let i = 0; i < s.length; i++){
    let arrayValue = s.charCodeAt(i);
    console.log(arrayValue);
    arrayOfChar = arrayOfChar.push(arrayValue);
    count++;
    console.log(i)
  }
    
  let arrayOfUnique = [...new Set(arrayOfChar)];
  console.log(arrayOfChar + " and " + arrayOfUnique);
  return arrayOfChar === arrayOfUnique;
};

console.log(hasUniqueChars("abcdefg"));



const withdraw = amount => {
  let bills = [0,0,0];
  if (amount/100 > 0){
    bills[0] = Math.floor(amount/100);
    amount = amount % 100;
  }
  if (amount/50 > 0){
    bills[1] = Math.floor(amount/50);
    amount = amount % 50;
  }
  if (amount/20 > 0){
    bills[2] = Math.floor(amount/20);
    amount = amount % 20;
  }
  return bills;
};

console.log(withdraw(290))