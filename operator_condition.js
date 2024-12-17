//Arithmetic Operator
let a = 10,b = 5;
console.log("a + b = ",a+b);
console.log("a - b = ",a-b);
console.log("a * b = ",a*b);
console.log("a / b = ",a/b);
console.log("a % b = ",a%b);
console.log("a ^ b = ",a**b);
//Unary operator
a++;
console.log("a = ",a);
a += 1;
console.log("a = ",a);
a = a + 1;
console.log("a = ",a);
console.log("++a = ",++a);
console.log("a++ = ",a++);
console.log("a = ",a);
//Assignment Operator
a = 2;
console.log("a = ",a);
a += 4;
console.log("a = ",a);
a -= 1;
console.log("a = ",a);
a *= 2;
console.log("a = ",a);
a /= 2;
console.log("a = ",a);
a %= 2;
console.log("a = ",a);
a = 2;
a **= 2;
console.log("a = ",a);
//Comparison Operator
a = 10,b = 5;
console.log("10 = 5",a == b);
console.log("10 != 5 ",a != b);
console.log("10 > 5",a > b);
console.log("10 >= 5",a >= b);
console.log("10 < 5",a < b);
console.log("10 <= 5",a <= b);
let i = 123;
let s = "123";
console.log("123 = '123' ",i == s);
console.log("123 = '123' ",i === s);
console.log("123 != '123' ",i !== s);
//Logical Operators
let x = 6;
let y = 5;
let cond1 = x > y;
let cond2 = x === 6;
console.log("condition_1 && condition_2",cond1 && cond2);
console.log("condition_1 || condition_2",cond1 || cond2);
console.log("!condition_1",!cond1);

//Conditional Statements
let age = 11;
if(age > 18){
    console.log("you can vote");
}
else{
    console.log("you cannot vote");
}
let num = 12;
if(num % 2 === 0){
    console.log("The number is even");
}
else{
    console.log("The number is odd");
}
let num1 = 17,num2 = 15,num3 = 19;
if(num1 > num2 && num1 > num3){
    console.log("max = ",num1);
}
else if(num2 > num1 && num2 > num3){
    console.log("max = ",num2);
}
else{
    console.log("max = ",num3);
}
//Ternary Operator
let result = 99;
let r = result === 100 ? "full marks" : "you got 99/100";
console.log(r);
result === 100 ? console.log("full marks") : console.log("you got 99/100");

let key = "monday";
switch(key){
    case "sunday": console.log("Today is sunday");
                   break;
    case "monday": console.log("Today is monday");
                   break;
    case "tuesday": console.log("Today is tuesday");
                   break;
    case "wednesday": console.log("Today is wednesday");
                   break;
    case "thrusday": console.log("Today is thrusday");
                   break;
    case "friday": console.log("Today is friday");
                   break;
    case "saturday": console.log("Today is saturday");
                   break;
    default:console.log("no such day");
}
// let fullname = prompt("Enter your name:");
// console.log(fullname);
// let number = prompt("Enter a number");
// if(number % 5 === 0){
//     console.log("The number is a multiple of 5");
// }
// else{
//     console.log("The number is not a multiple of 5");
// } 
let marks = 99;
if(marks >= 90 && marks <= 100){
    console.log("Grade:A");
}
else if(marks >= 70 && marks <= 89){
    console.log("Grade:B");
}
else if(marks >= 60 && marks <=69){
    console.log("Grade:C");
}
else if(marks >= 50 && marks <= 59){
    console.log("Grade:D");
}
else{
    console.log("Grade:F");
}
