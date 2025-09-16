function hello() {
    console.log("hello from export file");
}
let user = {
    name: "John",
    age: 30,
}
// Array destructuring
let opArray = [1, user, hello, 2, 3, 4, 5];
let [obj1, obj2, obj3] = opArray;
console.log(obj1, obj2, obj3);
obj3();

let userDetails = {
    username: "Alice",
    age: 25,
    address: {
        street: "123 Main St",
        country: {
            cname: "india",
            continent: "asia"
        },
        zip: "12345"
    }
};
let { address: { country: { cname } } } = userDetails;
// console.log(userDetails);
// // console.log(address);
// console.log(cname);
// console.log(userDetails.address.country.cname);

// Function 1: Adds two numbers
export function add(a, b) {
    return a + b;
}

// Function 2: Subtracts two numbers
function subtract(a, b) {
    return a - b;
}

// Function 3: Multiplies two numbers
function multiply(a, b) {
    return a * b;
}

// Function 4: Divides two numbers
function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}

// Function 5: Greets a user
function greet(name) {
    return `Hello, ${name}!`;
}

// Object 1: Represents a car
export let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    start: function () {
        console.log("Car started");
    }
};

// Object 2: Represents a book
export let book = {
    title: "JavaScript Essentials",
    author: "John Doe",
    pages: 350,
    read: function () {
        console.log("Reading the book");
    }
};

export const obj = { book, car, add, subtract, multiply, divide, greet };
// let obj = require("./export.js")
// console.log(obj)