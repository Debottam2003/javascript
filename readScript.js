let fs = require("fs").promises;

(async () => {
    let bufferData = await fs.readFile("./13_script.js");
    console.log(bufferData);
})();


