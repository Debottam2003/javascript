// let user1 = {
//     firstname: "Debottam",
//     lastname: "Kar",
//     show: function () {
//         console.log(this.firstname + " " + this.lastname);
//     }
// }

// let user2 = {
//     firstname: "Okudera",
//     lastname: "Kar",
// }

// user1.show();
// Function borrowing

// Call method
// user1.show.call(user2);
// call function calls a function for an object/instance

let user1 = {
    firstname: "Debottam",
    lastname: "Kar",
}

let user2 = {
    firstname: "Okudera",
    lastname: "Kar",
}

let show = function () {
    console.log(this.firstname + " " + this.lastname);
}

show.call(user1);
show.call(user2);

// Bind method
// bind function binds a function with an object/instance and returns a new function
// console.log(this); // this (->) points to global object
let func = show.bind(user2);
func();

// enclosing lexical context
// In js functions and modules and {let, const} creates lexical scope or enclosing lexical context

const obj1 = {
    name: "Bob",
    greet: function () {
        console.log(this.name);
    }
};
// In regular function this points to the object that called the function
obj1.greet(); // Output: Bob

const obj2 = {
    name: "Alice",
    greet: () => {
        console.log(this.name);
    }
};
// In arrow function this points to enclosing lexical context
// In this case, the enclosing lexical context is the global scope where this.name is undefined
obj2.greet(); // Output: undefined

const obj3 = {
    name: "Charlie",
    greet: function () {
        const innerFunction = () => {
            console.log(this.name);
        };
        innerFunction();
    }
};
// Here, innerFunction is an arrow function, so inherits this from the enclosing lexical context
// and here enclosing lexical context is greet function where this refers to obj3
obj3.greet(); // Output: Charlie