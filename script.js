// //-------------------------------------------------Javascript----------------------------------------------
// var v1 = 1;
// let v2 = 2;
// const v3 = 3;
// console.log(v1, v2, v3);
// console.table([{ 'value': v1 }, { 'value': v2 }, { 'value': v3 }]);
// let myname = "deb";
// let marks = 99;
// let cgpa = 8.145;
// let voter = true;
// let married = undefined;
// let backload = null;
// let c;
// console.log(myname, marks, cgpa, voter, married, backload, c);

// console.log('1' == 1);
// console.log('1' === 1);

// for (let i = 0; i < 10; i++) {
//     process.stdout.write(i + " ");
// }
// console.log();

// let array = [7, 8, 9, 2, 3, 5, 10, 13];
// //normal for loop
// console.log("normal for loop");
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }
// //for in loop
// console.log("for in loop");
// for (let i in array) {
//     process.stdout.write(array[i] + " ");
// }
// console.log();
// //for of loop
// console.log("for of loop");
// for (let i of array) {
//     process.stdout.write(i + "\n");
// }
// console.log();
// //for each loop using normal function
// console.log("for each loop using normal function");
// array.forEach(function (val) {
//     console.log(val);
// });
// //for each loop using arrow function
// console.log("for each loop using arrow function");
// array.forEach((val) => {
//     console.log(val);
// });

// let check = true;
// while (check) {
//     console.log("while loop");
//     check = false;
// }
// do {
//     console.log("while loop");
//     check = false;
// } while (check);
// let fullname = "debottam kar";
// for (let i of fullname) {
//     console.log(i);
// }

// fullname = "debottam kar";
// console.log(fullname.slice(0, 5));
// console.log(fullname.substring(0, 5));

// let arr = [7, 8, 9, 2, 3, 5, 10, 13];
// let newarr = arr.reverse();
// console.log(arr.slice(0, arr.length));

// let insert = "yo yo";
// console.log(`hi i am ${insert}`);

// let string = '1 2 3 4 5';
// let list1 = string.split(' ');
// console.log(list1);

// let list2 = [];
// string = '123456';
// for (let i of string) {
//     list2.push(Number(i));
// }
// console.log(list2);

// console.log(typeof ("deb"), typeof (4), typeof (4.4), typeof (true), typeof (null), typeof (undefined));

// list2 = [7, 8, 9, 2, 3, 4, 5, 10, 13];
// s = String(list2);
// console.log("list to string: " + s);
// list2.pop();
// let l3 = list2.concat([99, 96, 95]);
// console.log(l3);
// l3.push([0, 0, 0, 0]);
// console.log(l3);
// l3.push(0, 0, 0, 0);
// console.log(l3);
// let l4 = [...l3, 100, 200, 300];
// console.log(l4);

// s = "hello world";
// console.log(s.includes('helloo'));

// obj = {
//     fullname1: 'deb',
//     age: 21,
//     cgpa: 8.143,
//     marks1: [99, 96, 95],
//     address: {
//         city: 'naihati',
//         state: 'west bengal',
//         country: 'india',
//         pin: 743165
//     }
// };
// let { fullname1, marks1 } = obj;
// console.log(obj);
// console.log(marks1);
// let newobj = { ...obj, fullname1: 'debottam kar' };
// console.log(newobj);

// function f1() {
//     console.log('hi regular function');
// }
// let f2 = () => {
//     console.log('hi arrow function');
// }
// f1();
// f2();

// //method overloading simulation
// function greet() {
//     if (arguments.length === 1) {
//         console.log(`Hello, ${arguments[0]}!`);
//     } else if (arguments.length === 2) {
//         console.log(`${arguments[1]}, ${arguments[0]}!`);
//     } else {
//         console.log("Welcome!");
//     }
// }
// greet();
// greet("Alice");
// greet("Alice", "Good evening");

// let arr1 = [7, 8, 9, 2, 3, 4, 5, 10, 13];
// function double(i) {
//     return i * 2;
// }
// let newarr1 = arr1.map(double);
// console.log(newarr1);
// newarr = arr.map((val) => {
//     return val * 3;
// });
// console.log(newarr);
// newarr = arr.filter((val) => {
//     return true;
// });
// console.log(newarr);

// //callback function or higher order function
// let fname = function f() {
//     return 'hi';
// };
// function apply() {
//     return fname();
// }
// console.log(apply());
// function convert(name, formatter) {
//     return function () {
//         return formatter(name);
//     };
// }
// function formatter(name) {
//     return name.toUpperCase();
// }
// let run = convert('alice', formatter);
// console.log(run());

// setTimeout(() => {
//     console.log('hi');
// }, 1000);
// function f() {
//     console.log('hi');
// }
// //setInterval(f, 3000);
// let object1 = {};
// n = "debottam kar";
// for (let i of n) {
//     if (object1[i]) {
//         object1[i] += 1;
//     }
//     else {
//         object1[i] = 1;
//     }
// }
// console.log(Object.keys(object1));
// console.log(Object.values(object1));
// console.log(Object.entries(object1));
// let btn = document.querySelector('button');
// btn.style.border = "none";
// btn.style.fontFamily = "cursive";
// btn.style.color = "blue";
// btn.style.padding = "1rem";
// btn.style.fontSize = "1rem";
// btn.style.borderRadius = "20px";
// btn.style.backgroundColor = "black";
// btn.style.margin = "1rem";
// let data = [
//     { id: 1, name: 'deb', email: 'deb@gmail.com', message: 'hi' },
//     { id: 2, name: 'sri', email: 'sri@gmail.com', message: 'yo' },
//     { id: 3, name: 'd', email: 'deb@gmail.com', message: 'js is the best' }
// ];
// let table_data = document.querySelector('.table');
// table_data.style.fontFamily = "cursive";
// table_data.style.fontSize = "2rem";
// table_data.style.margin = "1rem";
// table_data.innerHTML = `
//                 <table border=1>
//                 <tr>
//                 <th>Name</th>
//                 <th>Score</th>
//                 <th>cgpa</th>
//                 </tr>
//                 <tr>
//                 <td>Debottam</td>
//                 <td>99</td>
//                 <td>91.4</td>
//                 </tr>
//                 <tr>
//                 <td>Sritama</td>
//                 <td>99</td>
//                 <td>92.4</td>
//                 </tr>
//                 </table>`;
// table_data.style.color = "darkblue";
// let t1 = document.createElement('table');
// t1.setAttribute('border', '1');
// t1.style.color = "black";
// t1.style.fontFamily = "cursive";
// t1.style.fontSize = "2rem";
// t1.style.margin = "1rem";
// let row = document.createElement('tr');
// let main = document.querySelector('.main');
// main.prepend(t1);
// t1.appendChild(row);
// Object.keys(data[0]).forEach((items) => {
//     let column = document.createElement('th');
//     column.innerText = items.toLocaleUpperCase();
//     column.style.color = "red";
//     row.appendChild(column);
// });
// let tbody = document.createElement('tbody');
// data.forEach((items) => {
//     let tr = document.createElement('tr');
//     Object.values(items).forEach((vals) => {
//         let tdata = document.createElement('td');
//         tdata.innerText = vals;
//         tr.appendChild(tdata);
//     });
//     tbody.appendChild(tr);
// });
// t1.appendChild(tbody);

// let t2 = document.querySelector(".t2");
// t2.setAttribute("border",'1');
// let HTML = `<thead>
//                 <tr>
//                     <th>Id</th>
//                     <th>Name</th>
//                     <th>Email</th>
//                     <th>Message</th>
//                 </tr>
//                 </thead>
//                 `
// data.forEach((items)=>{
//      HTML += `<tr>
//         <td>${items.id}</td>
//         <td>${items.name}</td>
//         <td>${items.email}</td>
//         <td>${items.message}</td>
//      </tr>`
// })
// t2.innerHTML = HTML;
// t2.style.color = "darkblue";
// t2.style.fontFamily = "arial";
// t2.style.fontSize = "2rem";
// t2.style.margin = "1rem";
// let date = new Date();
// d = String(date);
// console.log(d);
// console.log(date);
// console.log(date.getDate());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getHours());
// console.log(date.getFullYear());
// console.log(date.getFullYear() + "-" + (Number(date.getMonth()) + 1) + "-" + date.getDate());
// console.log(date.getMonth());
// console.log(date.getTime());
// console.log(date.toLocaleString());
// async function result() {
//     return 1;
// }
// console.log(result());
// let myarr = [7,8,9,2,3,5,10,13];
// console.log("A ",myarr);
// let mystring = "debottam";
// let myarr3 = mystring.substring(3,0);
// console.log("E ",myarr3);
// let myarr1 = myarr.slice(1,3);
// console.log("B ",myarr1);
// let myarr2 = myarr.splice(1,3);
// console.log("C ",myarr2);
// console.log("D ",myarr);
// console.log(Array.isArray(myarr));
// a = Array.from("debottam");
// console.log(a);
// b = Array.of("debottam","kar");
// console.log(b);
// let obj = new Object();
// obj.fullname = "deb";
// obj.age = 21;
// console.log(obj);

// let obj1 = { 1: "a", 2: "b" };
// let obj2 = { 3: "c", 4: "d" };

// let obj3 = { obj1, obj2 };
// console.log(obj3);

// obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);

// obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

// let {fullname: fn} = obj;
// console.log(fn);

// let set1 = new Set();
// set1.add(1);
// set1.add(2);
// set1.add(1);
// console.log(set1);
// set1.forEach((s)=>{
//     console.log(s);
// });

// //array destructuring
// let numbers = [1, 2, 3];
// let [first, second, third] = numbers;

// console.log(first);
// console.log(second);
// console.log(third);

// numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// [first, second, ...rest] = numbers;

// console.log(first);
// console.log(second);
// console.log(rest);

// numbers = [[1, 2, 3], [4, 5, 6]];
// [a1, a2] = numbers;
// console.log(a1);
// console.log(a2);


// Functions
// let func = () => {
//     console.log("this is a function in another file...");
// };
// module.exports = func;
// func();

// function cart_total(...value) { //spread
//     console.log(value);
// }
// cart_total(200);
// cart_total(200, 500);
// cart_total(200, 500, 600);

// let obn ={
//     func : function(){
//         console.log("function in object");
//     }
// };
// obn.func();
// obn["func"]();

// let list = [7, 8, 9, 2, 3, 5, 10, 13];
// list.forEach(function (i) {
//     console.log(i);
// });
// list.forEach((i) => {
//     console.log(i);
// });

// let a = list.map((i)=> {return i});
// console.log(a);

// list.forEach((i)=> {
//     console.log(i);
//     console.log(i+1);
// });
// list.forEach((i)=> console.log(i));
// list.forEach((i)=> (console.log(i)));

// let o = list.map((i) => {
//     return 2;
// });
// console.log(o);

// o = list.map((i) => 2);
// console.log(o);

// o = list.map((val, index) => ({ index: index, val: val }));
// console.log(o);

// o = list.map((val, index) => ({ [index]: val }));
// console.log(o);

// exception
// try {
//     let res = 10 / 0;
//     throw new Error("divison by zero");
//     console.log(res);
// }
// catch (error) {
//     console.error(error.message);
// }
// exception
// try {
//     console.log(eval("10+"));
// } catch (error) {
//     console.error(error.message);
// }

// exception
// try {
//     console.log(value);
// }
// catch (e) {
//     console.error(e.message);
// }

// exception
// try {
//     let new_array = new Array(-10);
//     new_array[0] = 1;
//     new_array[11] = 10;
//     console.log(new_array[11]);
// }
// catch (e) {
//     console.error(e.message);
// }
// exception
// try {
//     let arr = JSON.parse('[7,8,9,2,3,5,10,13]');
//     console.log(arr);
//     let n_arr = JSON.stringify(arr);
//     console.log(n_arr);
// }
// catch (e) {
//     console.error(e.message);
// }
// let btn = document.querySelectorAll('button');
// btn.forEach((b) => {
//     b.addEventListener('click', (e) => {
//         console.log(b.id, e.target.textContent);
//         console.log(b.style.color);
//     });
// });

// setInterval(() => {
//     let date = new Date();
//     console.log(date.getHours()+":"+date.getMinutes()+":"+String(date.getSeconds()).padStart(2,0));
//     //console.log(date.toLocaleDateString());
//     console.log(date.toLocaleTimeString());
// }, 1000);

// let num = Math.floor(Math.random()*10 + 1);
// console.log(num);

// let new_array = new Array(5);
// array = [];
// console.log(new_array.length);
// console.log(array.length);
// let s = "deb";
// process.stdout.write(s + "\n");
// const input = require("prompt-sync")();
// let age = Number(input("What is your age? "));
// console.log(typeof age);
// console.log("your age is: " + (++age));
// console.log(typeof age);
// //import prompt from "prompt-sync";
// //const input = prompt();
// for(let i =0; i < 5; i++){
//    console.log(`${i+1}th item:`);
//    let x = Number(input());
//    array.push(x);
// }
// console.log(array);
// for(let i = 0; i < 5; i++){
//     for(let j = 0; j < i+1; j++){
//         process.stdout.write("*");
//     }
//     console.log();
// }

// let matrix = [[1, 2, 3], [4, 5, 6]];
// console.log(matrix[1][1]);

// function deb() {
//     setTimeout(() => {
//         console.log("hi deb");
//     }, 3000);
//     return new Promise((resolve,reject)=>{
//         resolve("done!");
//         console.log("this is a promise");
//     });
// }
// let pro = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("yo");
//         //resolve("done!");
//     }, 2000);
//     resolve("done!");
//     //reject("rejected requested...");
// });
// pro.then((result)=>{
//         console.log(result);
//         return "rony";
//     })
//     .then((data)=>{
//         console.log(data + " kar");
//     })
//     .catch((r)=>{
//         console.log(r);
//     });
// console.log("learning js");
// async function name() {
//     try {
//         let data = await pro;
//         console.log(data);
//     }
//     catch (err) {
//         console.log(err);
//     }
// }
// name();


// console.log('a'.charCodeAt());
// console.log(String.fromCharCode(97));



// //.........OOP.........
// function user(username, age) {
//     this.username = username;
//     this.age = age;
//     //return this;
// }
// user.prototype.deb = function(){
//     console.log(this.username + " is there");
// }
// const user1 = new user("deb", 21);
// const user2 = new user("rony", 22);
// console.log(user1);
// console.log(user2);
// user1.deb();
// user2.deb();

// let str = "deb    ";
// let str2 = "   rony";
// console.log(str.length);
// String.prototype.truelength = function(){
//     console.log(this);
//     console.log(this.trim().length);
// }
// str.truelength();
// str2.truelength();

// class animal {
//     constructor(username, age) {
//         this.username = username;
//         this.age = age;
//     }
//     //static
//     eat() {
//         console.log("animal is eating");
//     }
//     sleep() {
//         console.log("animal is sleeping");
//     }
// }
// let animal1 = new animal("deb", 21);
// animal1.sleep();
// animal1.eat();

// class dog extends animal {
//     constructor(username, bark) {
//         super(username);
//         this.bark = true;
//     }
//     sleep() {
//         console.log(this.username + " dog is sleeping");
//     }
// }
// let dog1 = new dog("bob", true);
// dog1.sleep();
// dog1.eat();

// class puppy extends dog{
//     constructor() {

//     }
// }


// let b = document.querySelector('button');
// b.addEventListener('keydown', function (event) {
//     console.log(event.key);
// });

// document.addEventListener('keydown', function (event) {
//     console.log(event.key);
//     let currentTop = parseInt(b.style.top) || 0; // Fallback to 0 if top is not set
//     b.style.top = currentTop + 5 + "px";
// });

// console.log(parseInt("45abbb66"));

// let ob = {
//     username: "deb"
// };
// func = {
//     f() {
//         console.log("hi object.");
//     },
//     f2: function f2() {
//         console.log("hi object..");
//     }
// };
// ob.__proto__ = func;
// ob.f();
// ob.f2();
// console.log(ob.__proto__);

//let arr = [7, 8, 9, 2, 3, 5, 10, 13];
// let new_arr = arr.sort((a, b) => a - b);
// console.log(new_arr);
// let a = [11, 12];
// let n = [...a, ...arr];
// console.log(n);
// let obj = {
//     k1: "v1",
//     k2: "v2"
// };
// console.log(obj);
// console.log(obj.k1);
// console.log(obj["k1"]);
// obj.k3 = "v3";
// console.log(obj);
// obj = { ...obj, k4: "v4" };
// console.log(obj);
// let o = [{ k1: "v1" }, { k2: "v2" }];
// console.log(o);
// o = [...o, { k3: "v3" }];
// console.log(o);
// let obj_new = {
//     k5: "v5",
//     k6: "v6",
//     k7: "v7",
// };
// console.log(obj_new);
// let obj_extend = Object.assign(obj, obj_new);
// console.log(obj_extend);
// console.log(typeof (arr));
// let x = 10;
// y = ++x;
// console.log(y);
// a = 10;
// b = a++;
// console.log(b);
// let num1 = 123;
// let num2 = num1;
// num1 = 124;
// console.log(num2,num1);
// let newArr1 = [7,8,9,2,3,5,10,13,21];
// let newArr2 = newArr1;
// newArr1.push(23);
// console.log(newArr2,newArr1);
// let num = 400;
// num++;
// let num3 = new Number(500);
// console.log(num2.valueOf());
// console.log(num);



/*let body = document.querySelector('body');
body.style.backgroundColor = "cornflowerblue";
body.style.color = "black";
body.style.fontFamily = "cursive";

let cart_button = document.querySelector('.cart_button');
let cart_area = document.querySelector('.cart_area');
cart_show = 0;
cart_button.addEventListener('click', (eve) => {
    if (cart_show === 0) {
        cart_area.style.display = "block";
        cart_show = 1;
    }
    else {
        cart_area.style.display = "none";
        cart_show = 0;
    }
});

let btn = document.querySelector('.moon');
let theme = "white";
btn.addEventListener('click', (eve) => {
    if (theme === "white") {
        body.style.background = "black";
        body.style.color = "white";
        theme = "black";
    }
    else {
        body.style.background = "cornflowerblue";
        body.style.color = "black";
        theme = "white";
    }
});

let add_btn = document.querySelectorAll('.add_to_cart');
let i = 0;
add_btn.forEach((b)=>{
    b.addEventListener('click',(eve)=>{
         let item = document.createElement('div');
         item.style.display = "flex";
         let details = document.createElement('h5');
         details.innerText = Item${++i};
         details.style.margin = "0";
         let count = document.createElement('a');
         count.setAttribute("href","https://chatgpt.com/");
         count.setAttribute("class","link");
         count.setAttribute("target","blank");
         count.innerText = "Count";
         item.appendChild(details);
         item.appendChild(count);
         cart_area.appendChild(item);
    });
});*/



//let mysym1 = Symbol();
//let mysym2 = Symbol("mysymbol");
//console.log(mysym1,mysym2);

// let myobj = {
//     fullname: "deb",
//     age: 21,
//     cgpa: 8.143,
//     [mysym2] : "symbol_value",
//     mysym2 : "123",
//     func: function () {
//         console.log(hello js user ${this.fullname});
//         return 1;
//     }
// };
// console.log(myobj);
// console.log(myobj[mysym2]);
// console.log(myobj?.mysym2);
// myobj.func();
// console.log(myobj.func());


// for (let i = 1; i <= 10; i++) {
//     const element = i;
//     console.log(element);
// }


// for (let i in myobj) {
//     console.log(i + " : " + myobj[i]);
// }


// let list = [7, 8, 9, 2, 3, 5, 10, 13];
// let l = list.filter((i) => {
//     return i > 4;
// });
// console.log(l);
// l = list.map((i) => { return i * 2; }).map((num) => { return num + 3 });
// console.log(l);
// l = list.reduce(()=>{})
// for (let i in list) {
//     console.log(list[i]);
// }
// for (let i of list) {
//     console.log(i);
// }
// list.forEach((i)=>{
//     console.log(i);
// });

// Object.keys(myobj).forEach((i) => {
//     console.log(i);
// });

// Object.entries(myobj).forEach((i) => {
//     console.log(i);
// });
// console.log(Object.entries(myobj));

// let set1 = new Set();
// set1.add(1);
// set1.add(2);
// set1.add(1);
// console.log(set1);

// let map1 = new Map();
// map1.set("ind","India");
// map1.set("usa","united states");
// map1.set("uk","england");
// console.log(map1);

// for(let i of map1){
//     console.log(i);
// }

// for(let [keys,values] of map1){
//     console.log(keys,values);
// }

// let rd = [1, 2, 3, 4];
// let total = rd.reduce(function (acc, cur) { return acc + cur }, 0);
// console.log(total);
// total = rd.reduce((acc, cur) => (acc + cur), 0);
// console.log(total);

// let cart = [
//     {
//         item: "js",
//         price: 999
//     },
//     {
//         item: "java",
//         price: 1999
//     },
//     {
//         item: "python",
//         price: 599
//     },
//     {
//         item: "c++",
//         price: 1999
//     }
// ];
// let total_price = cart.reduce((acc, curr_item) => {
//     return acc + curr_item.price;
// }, 0);

// console.log(total_price);

//let a = [7, 8, 9, 2, 3, 5, 10, 13, 21, 15];
// console.log(a);
// for(let i = 0; i < 5; i++){
//     if(a.includes(i+2)){
//         console.log(i+2);
//     }
// }

// let names = ["Alice","Bob","Bob"];
// let heights = [155,185,150];
// let val_obj = {};

// for (let i = 0; i < names.length; i++) {
//     val_obj[heights[i]] = names[i];
// }

// console.log(val_obj);
// heights.sort((a, b) => b - a);
// console.log(heights);
// let res = [];
// for(let i of heights){
//         let j = val_obj[String(i)];
//         console.log(val_obj[i]); 
//         res.push(j);
// }
// console.log(res);
// function rotate(a){
// let n = a.length - 1;
// for(let i = 0; i < a.length / 2; i++){
//     let temp = a[i];
//     a[i] = a[n-i];
//     a[n-i] = temp;
// }
// console.log(a);
// }
// rotate(a);
// let str = "debottamkar";
// console.log(str.indexOf("eb"));

// console.log('a'.charCodeAt());
//console.log(String.fromCharCode(98));
// console.log(a);
// a = a.filter((i)=> false);
// console.log(a);

// word1 = ["ab", "c"];
// word2 = ["a", "bc"];
// let s1 = JSON.stringify(word1);
// let s2 = JSON.parse(s1);
// console.log(s1);
// console.log(s2);
// let n1 = a.join("");
// console.log(n1);
//let s = "debottam";
// let new_str = "";
// for(let i =s.length - 1; i >= 0; i--){
//     new_str += s[i];
// }
//console.log(new_str);
//console.log(s.length);
// let s_to_a = s.split("");
// console.log(s_to_a);
//console.log(s[0]);
// words = ["abc","car","ada","racecar","cool"];
// for(let str of words){
//     let n = str.length;
//     let new_str = "";
//     for(let i =str.length - 1; i >= 0; i--){
//         new_str += str[i];
//     }
//     console.log(str);
//     console.log(new_str);
// }
//let res = [7,8,9];
// res.push([2,3,4]);
// console.log(res);
//let ob = {
//     nickname : "rony"
// };
// ob.age = 21;
// console.log(ob);
// let obj = { name: "John" };

// Object.assign(obj, { age: 30, city: "New York" });

// console.log(obj);
// let obj2 = { name: "John" };
// let obj3 = {newobj: {
//     state : "New York",
//     country : "usa"
// }};
// obj2 = { ...obj2, ...obj3};

// console.log(obj2);

//console.log('a' > 'b');
// let alpha = ['b','c','d','a'];
// alpha.sort();
// console.log(alpha);
// alpha.push('e');
// console.log(alpha);
// alpha.splice(1,1);
// console.log(alpha);
// s = "abc";
// t = "ahbgdc";
// let arrs = [];
// let arrt = [];
// for (let i of s) {
//     arrs.push(i);
// }
// console.log(arrs);
// for (let i of t) {
//     arrt.push(i);
// }
// console.log(arrt);
// arrs.sort();
// arrt.sort();
// console.log(arrs);
// console.log(arrt);
// let news = arrs.join("");
// let newt = arrt.join("");
// console.log(news);
// console.log(newt);
// if (newt.includes(news)) {
//     console.log("true");
// }
// else {
//     console.log("false");
// }
//.........END.........(For Now)