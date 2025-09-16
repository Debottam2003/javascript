let arr = [
    {id : 1, name : "debottam"},
    {id : 2, name : "sritama"},
    {id : 3, name : "soma"},
    {id : 4, name : "goutam"}
];

let data = {};
for(let i in arr){
    if(arr[i].id === 2){
        data = arr[i];
        break;
    }
}

for(let i of arr){
    if(i.id === 3){
        data = i;
        break;
    }
}

arr.forEach((i)=>{
    if(i.id === 2){
       data = i;
    }
});

data = arr.find((i)=>{
    return i.id === 2;
})

data = arr.filter((i)=>{
    return i.id === 2;
});

for(let i = 0; i < arr.length; i++){
    if(arr[i].id === 2){
        data = arr[i];
        break;
    }
}
let c = 0;
let newdata = {};
while(c < arr.length){
    if(arr[c].id === 3){
        newdata = arr[c];
        break;
    }
    c++;
}

console.log(data);
console.log(newdata);