//object oriented programming
class Baby {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    show() {
        console.log(this.name, this.age);
    }
}
let add = function () {
    console.log(10 + 20);
}
let obj = {
    fullname: 'deb',
    age: 21
};
module.exports = { add, obj, Baby };