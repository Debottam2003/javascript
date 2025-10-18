// let arr = [7,8,9,2,3,5,10,13];
let arr = {
    name: "debottam kar",
    roll: 1,
    age: 22
};
// console.log("use of 'of' in for loop");
// for(const i of arr){
//     console.log(i);
// }
console.log("use of 'in' in for loop");
for (const i in arr) {
    console.log(i + " " + arr[i]);
}
// console.log("normal for loop");
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }
// console.log("use of for-each loop");
// arr.forEach((element) => {
//     console.log(element);
// });
