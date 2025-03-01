// ascii 
// Convert ASCII value to character
let asciiValue = 65; // ASCII value for 'A'
let character = String.fromCharCode(asciiValue);
console.log("ASCII value to charcter: ", character); // Output: 'A'
// Convert character to ASCII
let chars = ['a', 'x', 'z', 'b', 'g'];
for (let i = 0; i < chars.length; i++) {
    console.log("ascii value of: ", chars[i].charCodeAt(0));
}
console.log(CharacterData('a'));