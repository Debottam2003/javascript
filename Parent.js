//object oriented programming
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    show() {
        console.log(this.name, this.age);
    }
}
let animal1 = new Animal('deb', 21);
animal1.show();
module.exports = Animal;