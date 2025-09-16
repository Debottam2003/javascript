// const student = {
//     std_name : "Rony Kar",
//     marks : 99,
//     print_marks : function(){
//         console.log(this.marks);
//     },
//     cgpa(){
//         console.log("cgpa : ",8.35);
//     }
// }
// delete student.marks // the marks property in the student object will be deleted
// const human = {
//     description(){
//         console.log("I am a Human"); 
//     },
//     eat(){
//         console.log("I like to eat chana");
//     }    
// }
// console.log(student.std_name);
// console.log(student.marks);
// student.print_marks();
// student.cgpa();
// const teacher = {
//     t_name : "Debottam Kar",
//     age : 21,
//     cgpa(){
//         console.log("cgpa : ",8.15);
//     }
// }
// student.__proto__ = teacher;
// student.__proto__ = human;
// Object.assign(student, human, teacher);
// console.log(student.t_name);
// console.log(student.age);
// student.cgpa();
// student.eat();
// student.description()

// try{
// class toyota {
//     constructor(color,price){
//           this.color = color;
//           this.price = price;        
//     }
//    start(){
//     console.log("fortuner is started.");
//    }
//    stop(){
//     console.log("fortuner is stopped.");
//    }
//    setbrand(brand){
//     this.brandname = brand;
//     console.log(this.brandname);
//    }
//    specs(){
//     console.log(this.color);
//     console.log(this.price); 
//    }
// }
// let fortuner = new toyota("white","25lakh");
// fortuner.start();
// fortuner.stop();
// fortuner.specs();
// fortuner.setbrand("fortuner");
// class suv extends toyota{
//     constructor(colornew,price,profile){
//         super(colornew,price);
//         this.profile = profile;
//     }
//    stat(){
//       console.log("It is a suv");
//    }
// }
// let car1 = new suv("black","35lakh","7seater");
// car1.stat();
// car1.start();
// car1.stop();
// console.log(car1.color);
// console.log(car1.price);
// console.log(car1.profile);
// }
// catch(err){
//     console.log("It is an error:",err);
// }

//Multiple inheritance in a special way
// // Mixin 1
// let CanFly = {
//     fly() {
//       console.log(`${this.name} is flying!`);
//     }
//   };

//   // Mixin 2
//   let CanSwim = {
//     swim() {
//       console.log(`${this.name} is swimming!`);
//     }
//   };

//   // Class that uses the mixins
//   class Animal {
//     constructor(name) {
//       this.name = name;
//     }
//   }

//   // Apply mixins to the Animal class
//   Object.assign(Animal.prototype, CanFly, CanSwim);

//   let duck = new Animal('Duck');
//   duck.fly();  // Output: Duck is flying!
//   duck.swim(); // Output: Duck is swimming!

// let obj = {
//     path: 5000,
//     do() {
//         console.log("Hello World!");
//     }
// }
// for (let i in obj) {
//     console.log(i, ": ", obj[i]);
// }
// obj.do();
// console.log(obj);

// let routes = {
//     get: function () {
//         console.log("This is get handler");
//     }
// }
// routes.get()

// let routes = {
//     "/": function () {
//         console.log("This is get handler");
//     }
// }
// for (let i in routes) {
//     console.log(i, ": ", routes[i]);
// }
// routes["/"]()
// let hjbrl = routes["/"]
// hjbrl()

// routes["/"]()

// let routes = {
//     "/": {
//         get() {
//             console.log("This is get handler");
//         },
//         post() {
//             console.log("This is post handler");
//         }
//     }
// }
// routes["/"].get()
// routes["/"].post()

class Node {
    constructor(id) {
        this.id = id;
    }
}

const user = {
    name: "John",
    age: 25,
    node: Node
};

// Example usage:
console.log(user);
console.log(user.name);
console.log(user.age);

const { node } = user;

console.log(new node(0));
