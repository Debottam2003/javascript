let process = [
    {
        pid: "p1",
        at: 0,
        bt: 30
    },
    {
        pid: "p2",
        at: 2,
        bt: 5
    },
    {
        pid: "p3",
        at: 1,
        bt: 5
    }
];

for(let i = 0; i < process.length - 1; i++) {
    for(let j = 0; j < process.length - i - 1; j++) {
        if(process[j].at > process[j + 1].at) {
            let temp = process[j];
            process[j] = process[j + 1];
            process[j + 1] = temp;
        }
    }
}

for(let i of process) {
    console.table(i);
}

let gnattChart = [];

let s = 0;
for(let i in process) {
    s += process[i].bt;
    gnattChart.push({pid: process[i].pid, ct: s});
}

console.log(gnattChart);

let TAT = [];
let WT = [];

let ct = 0;
for(let i in process) {
    ct += process[i].bt;
    TAT.push({pid: process[i].pid, t: ct - process[i].at});
    WT.push({pid: process[i].pid, t: ct - process[i].at - process[i].bt});
}

console.log(TAT);
console.log(WT);

