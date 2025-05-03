let a = 10;
let b = 15;
let c = a + b;
console.log(c);
console.log(a + b);
c = 50;
console.log(c)
if (c == 50) {
    console.log("i am ok");
}
else {
    console.log("i am not ok");
}
for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {
        process.stdout.write("*");
    }
    console.log();
}
let i = 1;
while (i == 1) {
    console.log("hi");
    i += 1;
}
