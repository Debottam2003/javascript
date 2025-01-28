// const { performance } = require('perf_hooks');

// // Start the timer
// const startTime = performance.now();

// // Task: Calculate the sum of squares for a large range
// let sum = 0;
// const limit = 10**8; // 10 million iterations
// for (let i = 0; i < limit; i++) {
//   sum += i * i;
// }

// // End the timer
// const endTime = performance.now();
// const timeTaken = endTime - startTime;

// console.log(`Node.js completed the task in ${timeTaken.toFixed(3)} milliseconds.`);

// let obj = {
//   name : "debottam",
//   age : 21
// }
// console.log(obj);
// obj.toString = function(){
//   return "rony";
// }
// console.log(obj.toString());

// let res = (76/(6*6)).toFixed(1);
// console.log(res);

// let input = require('prompt-sync')();
// let num = input("Enter the number: ");
// console.log(num);

// function add(){
//     console.log(arguments.length);
//     console.log(arguments[0] + arguments[1]);
// }
// add(10,5);

//console.log(process.argv.slice(2));


// for the browser when we use worker thread the main thread and worker thread will 
// talk with each other using postMessage() and onmessage
//postMessage() sends data to each other and onmessage receives the data of each other
// let worker = new Worker('worker.js');

// worker.postMessage("hi i am deb");

// worker.onmessage = (event)=>{
//     console.log(event.data);
// };

// for(let i = 0; i < 1000; i++){
//     console.log("main thread" + i);
// }


// when working with worker thread in node js the main thread uses on and the 
// and data is send to the worker thread when the worker object is being created and invokes the worker thread
// worker thread uses parentPort.postMessage() to talk to each other

// Import the 'Worker' class from the 'worker_threads' module
const { Worker, workerData } = require('worker_threads');

// Create a new worker thread and pass data to it
// './worker.js' is the worker script, and 'workerData' carries initial data for the worker
let worker = new Worker('./worker.js', {workerData: "hi i am rony"});
//worker.postMessage("i am debottam kar");
// Listen for messages sent from the worker thread
worker.on('message', (data) => {
    console.log(data); // Log the message received from the worker
    //process.exit();
});

// This message will be logged by the main thread immediately after starting the worker
// Demonstrates that the main thread continues execution without waiting for the worker to complete

let c = 1;
for (let i = 0; i < 5000000000; i++) {
    c += i;
}
console.log("this is the main thread " + c);

//8 sec using worker thread vs 15 sec with out using worker thread

// c = 1;
// for (let i = 0; i < 5000000000; i++) {
//     c += i;
// }
// console.log("this is the main thread " + c);

