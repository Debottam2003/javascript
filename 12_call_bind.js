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