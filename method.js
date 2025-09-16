const user = {
    name: "Debottam",
    age: 30,
    email: "debottam@example.com"
};

console.log(user);

user.greet = function () {
    console.log(`Hello, my name is ${this.name}.`);
};

user.greet();

console.log(user);

const anotherUser = {
    name: "Alex",
    age: 25,
    email: "alex@example.com",
    greet: function () {
        console.log(`Hello, my name is ${this.name}.`);
    }
};

console.log(anotherUser);
anotherUser.greet.call(user);

console.log(user);

function farewell() {
    console.log("Goodbye");
}

farewell();

class Animal {
    speak() {
        console.log("Animal speaks");
    }
}

class Dog extends Animal {
    speak() {
        console.log("Dog barks");
    }
}

const a = new Dog();
a.speak();  // Dog barks — resolved at runtime
console.log(a);