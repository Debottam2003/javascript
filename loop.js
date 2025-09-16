//for loop
// for(let i=0; i<5; i++){
//     console.log("Debottam Kar");
// }
let sum = 0;
let i = 1;
// for(let i = 1;i <= 5;i++){
//     sum += i;
// }
//while loop
while (i <= 5) {
    sum += i;
    i++;
}
console.log(sum);
let d = 20;
//do while loop
do {
    console.log("Rony");
} while (d <= 10);
let str = "debottam kar";
//for of loop
for (let i of str) {
    console.log(i);
}
const user = {
    username: "Debottam Kar",
    age: 21,
    cgpa: 8.35
};
//for in loop
for (let key in user) {
    console.log(user[key]);
}
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
// let game_number = 3;
// let guess = prompt("Enter your guess number:");
// while(guess != game_number){
//     guess = prompt("Wrong! Enter your guess number:");
// }
// console.log("You are right");
//String
let fullname = "My name is Debottam Kar";
console.log(fullname);
console.log(fullname.length);
console.log(fullname[0]);
console.log(fullname[5]);
console.log(fullname[15]);
//Template Literals + String Interpolation
let specialstring = `This is a template literal`;
console.log(specialstring);
let output = `My name is ${user.username} and I am ${user.age} years old`;
console.log(output);
console.log("Debottam\nKar");
console.log("Debottam\tKar");
//String Methods
console.log(fullname.toUpperCase());
console.log(fullname.toLowerCase());
console.log(fullname.trim());
console.log(fullname.slice(0, 10));
let n = prompt("Enter your full name:");
let nm = "@" + n + n.length;
console.log(nm);