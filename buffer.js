let new_buffer = Buffer.from("My name is Debottam Kar");// collection of bytes, each character is represented using one byte
console.log(new_buffer.length); // 23
console.log(new_buffer);
let buff = Buffer.alloc(10, 0);
buff[3] = 'd'.charCodeAt(0);
console.log(buff);
// name.txt file size too 23bytes and total 23 characters present
// In Node.js, a Buffer is essentially an array/collection of bytes (numbers between 0 and 255).