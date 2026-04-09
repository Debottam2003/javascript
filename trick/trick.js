// async function test1() {
//     console.log("1");
// }

// function test2() {
//     console.log("2");
// }

// console.log(test1());
// console.log(test2());

async function test() {
    console.log("1");
    await Promise.resolve();
    console.log("2");
}

setTimeout(() => {
    console.log("4");
}, 0);
test();
console.log("3");
// ANS:- 1 3 2 4