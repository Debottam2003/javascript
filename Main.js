//object oriented programming
let Animal = require('./Parent');
let { add, Baby, obj } = require('./Child');
let a = new Animal('sri', 26);
a.show();
add();
console.log(obj);
let b = new Baby('rony', 22);
b.show();