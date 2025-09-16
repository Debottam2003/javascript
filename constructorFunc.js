// function create(name, age){
//     this.name = name;
//     this.age = age;
//     this.sayHello = function() {
//         console.log("Hello, my name is " + this.name);
//     };
//     return this;
// }
// let person1 = new create("John", 30);
// let person2 = new create("Jane", 25);
// console.log(person1.name, person2.name);
let username = "debottam";
let age = 22;
let userProfile = {
    username,
    age,
};
console.log(userProfile);
let arr = [userProfile, userProfile, username];
console.log(arr);