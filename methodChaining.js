// An import concept of object oriented programming
// that is 'Method chaining'
let user = {
    name: "Deb Kar",
    age: 22,
}

user.Data = function () {
    console.log("This is User Data ", user.name, user.age);
    return this;
};

user.Profile = function () {
    console.log("This is User Profile", user);
    return this;
};

user.Data().Profile();

class Car {
    constructor(color, model) {
        this.color = color;
        this.model = model;
    }
    getcolor() {
        console.log(this.color);
        return this;
    }
    getmodel() {
        console.log(this.model);
        return this;
    }
}
let car1 = new Car("White", "BMW");
console.log(car1);
car1.getcolor().getmodel();
car1.getcolor().getmodel().getcolor().getmodel();

