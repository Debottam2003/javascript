// ascii 
// Convert ASCII value to character
let asciiValue = 65; // ASCII value for 'A'
let character = String.fromCharCode(asciiValue);
console.log(character); // Output: 'A'
// Convert character to ASCII
let chars = ['a', 'x', 'z', 'b', 'g'];
for(let i = 0; i < chars.length; i++){
    console.log(chars[i].charCodeAt(0));
}