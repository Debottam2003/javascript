function timer(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 1000);
    });
}
async function printSequentially() {
    for (let i = 1; i <= 10; i++) {
        const data = await timer(i);
        console.log(data);
    }
}
printSequentially();
