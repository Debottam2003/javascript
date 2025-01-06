// self.onmessage = (event)=>{
//     console.log(event.data);
//     for(let i = 0; i < 1000; i++){
//         self.postMessage("worker thread" + i);
//     }
// };

const { parentPort, workerData } = require('worker_threads');

// Log the data received from the main thread
console.log("Worker thread received: " + workerData);

// Perform a CPU-intensive task
let c = 1;
for (let i = 0; i < 5000000000; i++) {
    c += i;
}

// Send the result back to the main thread
parentPort.postMessage(`Hi, I am the worker, and my job is done. Result: ${c}`);
