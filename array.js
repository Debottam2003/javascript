let arr = ['deb','rony','okudera','ichinose'];
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
for(let i of arr){
    console.log(i);
}
console.log(arr);
let marks = [];
marks = [99,96,95,91,90,85,84];
console.log(marks);
const user = {
    id : "Debottam",
    age : 21
}
for (let i in user){
    console.log(user[i])
}
let sum = 0;
for(let i = 0;i < marks.length;i++){
    sum += marks[i];
}
console.log(sum);
let avg = sum / marks.length;
console.log(avg);
let offer = [250,645,300,900,50];
for(let i=0;i<offer.length;i++){
    offer[i] = offer[i] - (offer[i] * 8/100);
}
for(let i of offer){
    console.log(i);
}
let link = [20,30];
link.push(10);
console.log(link);
console.log(link.toString());
console.log("Deleted item:",link.pop());
let arr1 = [7,8,9];
let arr2 = [5,2,3];
let arr3 = arr1.concat(arr2)
console.log(arr1);
console.log(arr2);
console.log(arr3);
arr3.unshift(13);
console.log(arr3);
arr3.shift();
console.log(arr3);
console.log(arr3.slice(0,5));
console.log(arr3.slice(0,5));
console.log(arr3.splice(2,2,10,21));//*important and very useful
console.log(arr3);