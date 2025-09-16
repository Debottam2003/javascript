const { randomBytes } = require("node:crypto");
console.log(crypto.getRandomValues(new Uint8Array(10)));
console.log(crypto.randomUUID());
console.log(randomBytes(10));
console.log(randomBytes(10).toJSON());
console.log(randomBytes(10).toString("utf-8"));
console.log(randomBytes(10).toString("hex"));