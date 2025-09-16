// let arr = "this is the new array".split(" ");
// console.log(arr);
// let username = arr.join(" : ");
// console.log(username);
let text = "this is the new array";
text = text.split(" ").map((word)=>{
    return word.charAt(0).toUpperCase() + word.slice(1);
}).join(" ");
console.log(text);