console.log("My name is Debottam Kar")
// window.alert("stop");
//primitive data types
//seven (number,string,Symbol,boolean,null,undefined,BigInt)
console.log("ichinose");
let fullname = "rony";
let age = 21;
const cgpa = 8.15;
let is_top = true;
let p = null;
let job;
let s = Symbol("hello");
let big = BigInt("123456");
console.log(fullname);
console.log(age);
console.log(cgpa);
console.log(p);
console.log(job);
console.log(s);
console.log(big);
console.log(is_top);
//non-primitive datatype 'object'
const product = {
    p_name: "founten pen",
    price: 259,
    is_deal: true,
    offer: 50,
    rating: 4
};
console.log(product);
const user = {
    username: "@rony",
    is_follow: true,
    followers: 59,
    following: 71,
    bio: "Hi I am debottam kar,I love coding,I am pro in it."
};
console.log(user);
console.log(user.username);
user.username = "@ronyokudera";
console.log(user["username"]);
const check = "1" - 1 + "1";
console.log(check);
console.log(2 ** 3);

