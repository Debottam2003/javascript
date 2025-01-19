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
//student.__proto__ = human;
// Object.assign(student, human, teacher);
// console.log(student.t_name);
// console.log(student.age);
// student.cgpa();
// student.eat();
// student.description()

try{
class toyota {
    constructor(color,price){
          this.color = color;
          this.price = price;        
    }
   start(){
    console.log("fortuner is started.");
   }
   stop(){
    console.log("fortuner is stopped.");
   }
   setbrand(brand){
    this.brandname = brand;
    console.log(this.brandname);
   }
   specs(){
    console.log(this.color);
    console.log(this.price); 
   }
}
let fortuner = new toyota("white","25lakh");
fortuner.start();
fortuner.stop();
fortuner.specs();
fortuner.setbrand("fortuner");
class suv extends toyota{
    constructor(colornew,price,profile){
        super(colornew,price);
        this.profile = profile;
    }
   stat(){
      console.log("It is a suv");
   }
}
let car1 = new suv("black","35lakh","7seater");
car1.stat();
car1.start();
car1.stop();
console.log(car1.color);
console.log(car1.price);
console.log(car1.profile);
}
catch(err){
    console.log("It is an error:",err);
}

//Multiple inheritance in a special way
// Mixin 1
let CanFly = {
    fly() {
      console.log(`${this.name} is flying!`);
    }
  };
  
  // Mixin 2
  let CanSwim = {
    swim() {
      console.log(`${this.name} is swimming!`);
    }
  };
  
  // Class that uses the mixins
  class Animal {
    constructor(name) {
      this.name = name;
    }
  }
  
  // Apply mixins to the Animal class
  Object.assign(Animal.prototype, CanFly, CanSwim);
  
  let duck = new Animal('Duck');
  duck.fly();  // Output: Duck is flying!
  duck.swim(); // Output: Duck is swimming!
  

  function set(name, roll){
    this.name = name;
    this.roll = roll;
    return this;
  }

  let obj1 = new set("debottam kar", 1);
  let obj2 = new set("sritama kar", 1);
  console.log(obj1.name, obj2.name);