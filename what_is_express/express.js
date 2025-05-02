function express() {
    return "an app object"
}

// You are adding a method urlencoded to express.prototype, which would be available on instances 
// created using new express().
express.prototype.urlencoded = function () {
    return "middleware for URL-encoded data"
};

express.json = function () {
    return "middleware for JSON data"
};

console.log(express);
console.log(express());
console.log((new express()).urlencoded());
console.log(express.json());
console.log(express.prototype);

// .prototype exists only on constructor functions, 
// like Array, Object, Function, String, Number, Boolean, Set, Map etc 
// or your own custom functions (like express above example).

// A prototype in JavaScript is an object that other objects inherit properties and methods from. 
// Every function in JavaScript has a prototype property, and when you create an object using 
// a constructor function, that object gets linked to the constructor’s prototype.

// The prototype is a blueprint for objects to share common behavior (methods/properties).

console.log(Array.prototype);
console.log(Object.prototype);
console.log(Function.prototype);
console.log(String.prototype);
console.log(Number.prototype);
console.log(Boolean.prototype);
console.log(Date.prototype);
console.log(RegExp.prototype);
console.log(Error.prototype);
console.log(Set.prototype);
console.log(Map.prototype);

function Person(name) {
    this.name = name;
}
Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
}

const john = new Person("John");
john.greet(); // Hello, my name is John

const numberArray = [1, 2, 3, 4, 5];
console.log(numberArray);
console.log(numberArray.__proto__);

let uname = "debottam kar";
console.log(uname.__proto__);

console.log((1).__proto__);

// let marks = new Array();
let marks = Array.from([1, 3, 3]);
// let marks = Array(3).fill(0);
// marks.push(1);
console.log(marks);
console.log(Array.from("debottam"));
// ['d', 'e', 'b', 'o', 't', 't', 'a', 'm']

console.log(Array.from({ length: 5 }, (v, i) => i + 1));
// [1, 2, 3, 4, 5]

console.log(Array.from({ length: 5 }, (v, i) => i + 1).map((x) => x * 2));
// [2, 4, 6, 8, 10] 

const numbers = [1, 2, 3, 4, 5];
// Use Array.from() with a map function to double the numbers
const doubledArray = Array.from(numbers, num => num * 2);
console.log(doubledArray);
// Output: [2, 4, 6, 8, 10]

let newSet = new Set([1, 2, 3, 4, 5]);
console.log(newSet); // Set(5) { 1, 2, 3, 4, 5 }

console.log(Array.from(newSet)); // [ 1, 2, 3, 4, 5 ]

// function Car(make, model, year) {
//     this.make = make || "Toyota";
//     this.model = model || "Corolla";
//     this.year =  year || 2020;
//     this.start = function () {
//         console.log("Car started");
//     };
//     return this;
// }
// let car1 = new Car("Toyota", "Corolla", 2020);
// let car2 = new Car("Honda", "Civic", 2021);
// console.log(car1); // Car { make: 'Toyota', model: 'Corolla', year: 2020, start: [Function] }
// console.log(car2); // Car { make: 'Honda', model: 'Civic', year: 2020, start: [Function] }
// car1.start(); // Car started
// car2.start(); // Car started

// Move start to the prototype

// Right now, each Car object gets its own copy of start(). That wastes memory.

function Car(make, model, year) {
    this.make = make || "Toyota";
    this.model = model || "Corolla";
    this.year = year || 2020;
}

Car.prototype.start = function () {
    console.log("Car started");
};

let car1 = new Car("Toyota", "Corolla", 2020);
let car2 = new Car("Honda", "Civic", 2021);

console.log(car1);
console.log(car2);
car1.start(); // Car started
car2.start(); // Car started
