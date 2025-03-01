let username = new String("debottam kar");
let userid = new String("debottam kar");
console.log("username:", username, "userid:", userid);

// Primitive strings are compared by value
let name1 = "rony";
let name2 = "rony";
console.log("name1 === name2:", name1 === name2); // true because both have the same value

// Objects are compared by reference
console.log("username == userid:", username == userid); // false because they are different objects
console.log("username === userid:", username === userid); // false because they are different objects

let debottam = {
    age: 22,
    color: "white",
}

let rony = {
    age: 22,
    color: "white",
}
console.log("debottam:", debottam);
console.log("rony:", rony);
console.log("debottam == rony", debottam == rony);