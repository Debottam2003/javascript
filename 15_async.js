async function test(s) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (s === "Error") {
                reject("An error occurred!");
                return;
            }
            resolve(s);
        }, Math.floor(Math.random() * 5000) + 1000);
    });
}

async function main(s) {
    try {
        const result = await test(s);
        console.log(result);
    } catch (error) {
        console.error("Error:", error);
    }
}

main("Hello World!");
main("Welcome to JavaScript!");
main("Error");
main("Async/Await is awesome!");