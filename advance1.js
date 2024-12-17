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