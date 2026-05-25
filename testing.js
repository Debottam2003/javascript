function add(a, b) {
    return a + b;
}

let i = 1;
function tester(add, args, res) {
    if (add(...args) === res) {
        console.log(`Test Case ${i} Passed ✅`);
    } else {
        console.log(`Test Case ${i} Failed ❌`);
    }
    i++;
}

tester(add, [5, 10], 15);
tester(add, [5, 10], 20);
tester(add, [0, 0], 0);
tester(add, [-5, -10], -15);
tester(add, [-5, 10], 5);