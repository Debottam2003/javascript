// function wrapper(fn) {
//    return async function (req, res, next) {
//       try {
//          await fn(req, res, next);
//          return;
//       } catch (err) {
//          res.status(500).send("Internal Server Error.");
//       }
//    }
// }

// let fn = async function () {
//    let response = await fetch("https://example.com");
//    let data = await response.text();
//    console.log(data);
// }

// function outer(fn) {
//    return async function (req, res, next) {
//       try {
//          await fn(req, res, next);
//          return;
//       } catch (err) {
//          console.log("Error occurred:", err.message);
//       }
//    }
// }

// console.log(outer(fn)());

// console.log("Done");

async function foo() {
   return 42;
}

// Promise { 42 }

let num = await foo();
console.log(num);

console.log("END");

// Every async function returns a Promise object implicitly. Writing return new Promise() we are
// explicitly returning a Promise object after over-writing the promise object.
// Every async function returns a Promise object and that Pending state Promise object is
// resolved when every task inside the async function is completed.
// 1. If there is no async operation inside the async function, the returned Promise object is resolved
//    immediately with the return value.
// 2. If there are async operations inside the async function, the returned Promise object is resolved
//    only after all the async operations are completed until that it is in Pending state.