const { randomInt } = require("chatujs");

class CustomError extends Error {
    constructor(message, code) {
        super(message);
        this.code = code;
    }
}

try {
    throw new CustomError("This is a custom error", randomInt(1, 333333333));
} catch (error) {
    console.log(error);
    console.log(error.message, error.code);
}