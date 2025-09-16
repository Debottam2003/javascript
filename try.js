// let obj = {
//     username: "debottam",
//     prompt: function () {
//         console.log(`The username is: ${this.username}`);
//     }
// }
// obj.prompt();
// var p = obj.prompt;
// p();

// function obj(){
//     let username = " debottam";
//     return function prompt() {
//         console.log(`The username is:${username}`);
//     }
// }
// let p = obj();
// p();

// function creator(username) {
//     return {
//         username: username,
//         prompt: function () {
//             console.log(`The username is: ${this.username}`);
//         }
//     }
// }

// let obj1 = creator("rony");
// let obj2 = creator("debottam");

// console.log(obj1, obj2);

// function creator(username) {
//         this.username = username,
//         this.prompt = function () {
//             console.log(`The username is: ${this.username}`);
//         }
//         return this;
// }

// let obj1 = new creator("rony");
// let obj2 = new creator("debottam");

// console.log(obj1.username, obj2.username);

// 'use strict'

// function greet() {
//     console.log(this);
// }
// greet(); 

// let age1 = 22;
// function greet(age2) {
//     console.log(age1, age2);
// }
// greet(20);