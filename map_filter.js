const { response } = require("express");

let apples = ['🍎', '🍎', '🍎', '🍎', '🍎', '🍎', '🍎', '🍎'];
// '🍌' is the imposter we have to remove them

// let B = apples.filter((element, index) => {
//     if(element != '🍌') {
//         return element;
//     }
//     else {
//         console.log('🍌 found in index:', index);
//     }
// }); 

// console.log(B);

// in index 3 and index 5 i want banana

// let B = apples.map((element, index) => {
//     if(index === 3 || index === 5) {
//         return '🍌';
//     } else {
//         return element;
//     }
// }); 

// console.log(B);

// array of objects most common json response

// we have apply map on these array and returns jsx as elemts of that array

