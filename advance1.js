// console.log("one");
// console.log("two");
// setTimeout(()=>{
//     console.log("hello");
// },2000);//timeout
// console.log("three");
// console.log("four");
//function sum(a,b){
//     console.log(a + b);
// }
// function calculator(a,b,sumcallback){
//     sumcallback(a,b);
// }
// setTimeout(()=>{calculator(1,2,sum)},5000);
// calculator(10,5,sum);

const { resolve } = require("path");

// ---------callback hell---------

// function getData(dataid,getNextData){
//     setTimeout(()=>{
//         console.log("data",dataid);
//         if(getNextData != null){
//         getNextData();
//         }
//     },3000);
// }
// getData(4,()=>{
//     console.log("getting data5...");
//     getData(5,()=>{
//     console.log("getting data6...");
//         getData(6);
//     });
// });
// getData(5);
// getData(6);

// // ---------promises---------

// let promise = new Promise(()=>
// {
//     console.log("I am a promise");
// });
// pending, fullfilled/resolved, rejected
// function getdata(dataid,getNextData){
//          return new Promise((resolve,reject)=>{
//                 setTimeout(()=>{
//         console.log("data",dataid);
//         resolve("success");
//         if(getNextData != null){
//         getNextData();
//         }
//     },10000);
//          })
// }
// const getpromise = ()=> 
// function getpromise(){
//     return new Promise((resolve,reject) => {
//            console.log("I am Rony.");
//            resolve("success");
//            //reject("network error 404.");
//     });
// }
// let p = getpromise();
// p.then((res)=>{
//     console.log("fullfilled. ",res);
// })
// p.catch((err)=>{
//     console.log("rejected. ",err);
// });
// const f = ()=>{
//     console.log("hi");
// }
// f();
// const fetchdata = (data)=> {
//     return new Promise((resolve,reject) => {
//         setTimeout(()=>{
//            console.log("data fetching",data);
//            resolve("success");},5000)
//            //reject("network error 404.");
//     });
// }
// fetchdata(1).then((response)=>{
//     console.log(response);
//     fetchdata(2).then((response)=>{
//     console.log(response);   
//     })
// })
// fetchdata(1).then((response)=>{
//     console.log(response);
//     return fetchdata(2);
//     }).then((response)=>{
//     console.log(response);   
//     })
// // ------ async await------
// async function  hello() {
//     console.log("hello");  
// }
// hello();
// function api(watherdata){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("weather data is:",watherdata);
//             resolve("success");
//         }, 2000);
//     });
// }
// async function getweatherdata() {
//     await api("warm");
//     await api("cold");
//     await api("hot");
//     await api("rainy");
//     await api("sunny");
// }
// getweatherdata();
// // IIFE function
// (async function (){
//     await api("warm");
//     await api("cold");
//     await api("hot");
//     await api("rainy");
//     await api("sunny");
// })();

console.log("Start world");

setTimeout(() => { // macro task queue less priority than micro task queue
    console.log("this is set time out");
}, 0);

async function doit() { // micro task queue high priority than macro task queue

    async function func1() {
        console.log("Hello from async function1");// syncronus statement immediately executed
        // There is no await inside it (or any asynchronous delay like fetch or setTimeout)
    }

    async function func2() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Hello from async function2");
                resolve("done");
            }, 2000);
        });

    }

    await func1();
    // Below portion will be suspended suspended and stored in promiseFullfillReactions untill promise is resolved and then will be moved 
    // to the micro task queue.
    console.log("yo yo");
    await func2();
    console.log("yo yo");
}
console.log(doit());

console.log("End world");

// Step-by-step Execution:

//     console.log("Start world")
//     → Outputs: Start world

//     doit() is called:

//         It's an async function → returns a promise.

//         It starts executing.

//         Inside it, func() is defined and then called with await.

//     await func():

//         Calls func(), which logs:
//         → Hello from async function

//         Since func is an async function, it returns a promise that resolves immediately.

//         But because of await, JavaScript yields back to the event loop, and everything after await is deferred to a microtask.

//     Synchronous code continues, so next:
//     → console.log("End world")
//     → Outputs: End world

//     Microtask runs (the remainder of doit()):
//     → console.log("yo yo")
//     → Outputs: yo yo

// Final Console Output:

// Start world
// Hello from async function
// End world
// yo yo

// Key Insight:

// Even though func() has no actual async delay, the presence of await in doit() means that "yo yo" gets
// deferred — await always defers the rest of part of the async function, even if the awaited value is already resolved.


// Step-by-Step Execution:

//     console.log("Start world")
//     → Output: Start world

//     setTimeout(..., 0)
//     → Registers a macrotask to run after the current call stack and all microtasks.

//     doit() is called

//         It begins running.

//         Inside doit(), func() is called with await.

//         func() runs immediately and logs:
//         → Output: Hello from async function

//         Then await yields control back to the event loop, and console.log("yo yo") is scheduled as a microtask.

//     console.log("End world")
//     → Output: End world

//     Microtasks run (queued by await):
//     → Output: yo yo

//     Macrotasks run (setTimeout):
//     → Output: this is set time out

// Final Console Output:

// Start world
// Hello from async function
// End world
// yo yo
// this is set time out

// if use .then then it will stored in promiseFullfillReactions
// and for .catch promiseRejectReactions