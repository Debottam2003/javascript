// let f = require('./01_js_learn1');
// console.log(f);

let global_OBJ = {};

function register(name) {
    global_OBJ["name"] = name;
    return global_OBJ;
}

console.log({...register("profile")});
console.log({...register("id")});
console.log({...register("email")});
console.log({...register("password")});