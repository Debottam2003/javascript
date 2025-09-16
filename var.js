// var name; // defination
// name = "deb"; // assignment
// var name = "deb"; //declaration
// var name = "gagan"; // redeclaration allow global scope

// let age = 22; // let donot support redeclaration but re assignemnt and block scope
// age = 20;

// const cgpa = 8.548; // const donot support redeclaration and reassignemnt and block scope
// cgap = 9;

// console.log(name, age, cgpa);
// function show(){
//     var username = "deb";
//     console.log(username);
// }
// show();
// console.log(username);

// let os = require('os');
// console.log(os.cpus().length);

// Move Zeros 
// var moveZeroes = function(nums) {
//     let zeros = [];
//     let res = []
//     for(let i of nums){
//         if(i !== 0){
//             res.push(i);
//         }
//         else{
//             zeros.push(0);
//         }
//     }
//     // console.log(res);
//     res.push(...zeros);
//     console.log(res);
//     return res;
// };
// console.log(moveZeroes([0,1,0,3,12]));

var findClosestNumber = function (nums) {
    let min = 1000000;
    let minindex = 0;
    for (let i = 0; i < nums.length; i++) {
        if (Math.abs(nums[i] - 0) === min) {
            min = Math.abs(nums[i] - 0);
            // console.log("min: " + min);
            minindex = nums[i] > nums[minindex] ? i : minindex;
            // console.log(minindex);
        }
        else if (Math.abs(nums[i] - 0) < min) {
            min = Math.abs(nums[i] - 0);
            minindex = i;
        }
    }
    return nums[minindex];
};
console.log(findClosestNumber([2, -1, 1]));