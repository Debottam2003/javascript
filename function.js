// function myfunction(){ // function definition
//     console.log("I am Rony.");
// }
// myfunction();//function call/invoke
// myfunction();
function sum(a,b){
         let c = a + b;
         console.log(c);
         return c;
}
let s = sum(5,10);
console.log(s);
//Arrow function
const mul = (a,b) => {
    console.log(a * b);
}
mul(2,18);
const print = () => console.log("hello");
print();
let arr = [7,8,9,5,2,3];
//Call back function / higher order function/method
arr.forEach(function value(val){
    console.log(val);
});
arr.forEach((val) => {
    console.log(val);
});
let n = ['deb','rony'];
n.forEach((val) => {
    console.log(val.toUpperCase());
});
let list1 = arr.map((val) => {
    return val;
});
console.log(list1);
let list2 = arr.filter((val) => {
    return val > 3;
});
console.log(list2);
let result = arr.reduce((res,val) => {
    console.log(res,val);
    return res + val;
});
console.log(result);