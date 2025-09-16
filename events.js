let div = document.querySelector(".love");
let button = document.querySelector("button");
// button.onclick = function change(){
//     div.innerText = "Debottam Kar";
// }
// button.onclick = function(){
//     div.innerText = "Debottam Kar";
// }
// button.onclick = (e)=> {
//      div.innerText = "Debottam Kar";
//      console.log("Debottam Kar")
//  }
// button.onclick = (e)=> {
//     div.innerText = "Rony Kar";
//     console.log("Rony Kar")
// }
//  function textchange(){
//     if (event.key === 'Enter') {
//         div.innerText = "Debottam Kar";
//     }   
//  }
// button.addEventListener("click",(e)=>{
//     div.innerText = "Debottam Kar";
//     console.log("Debottam Kar")
// });
// button.addEventListener("click",(e)=>{
//     div.innerText = "Rony Kar";
//     console.log("Rony Kar")
// });
// button.onclick = function(){
//     let body = document.querySelector("body");
//     body.style.backgroundColor = "black";
// }
// button.ondblclick = function(){
//     let body = document.querySelector("body");
//     body.style.backgroundColor = "white";
// }
let mode = "light";
button.addEventListener("click",(e)=>{
       let body = document.querySelector("body");
       if(mode === "light"){
       body.style.backgroundColor = "black";
       mode = "dark";
       }
       else{
        body.style.backgroundColor = "white";
        mode = "light";
       }
 });
// button.addEventListener("dblclick",(e)=>{
//     let body = document.querySelector("body");
//     body.style.backgroundColor = "white";
// });