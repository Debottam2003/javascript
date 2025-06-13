const URL = "https://cat-fact.herokuapp.com/facts";
let fact = document.querySelector("#facts");
let btn = document.querySelector("#btn");
// const getFacts = async ()=> {
//     console.log("getting data......");
//     let response = await fetch(URL);
//     console.log(response);
// };
// getFacts();
// const getFacts = async function(){
//         console.log("getting data......");
//         let response = await fetch(URL);
//         console.log(response);
//         let data = await response.json();
//         return data;
// for(let i in data){
//     console.log(data[i].text);
// }
// for(let i of data){
//     console.log(i);
// }
//     for(let i=0;i<data.length;i++){
//         console.log(data[i]);
//         console.log(data[i].text);
//     }
//};
// const getFacts = function(){
//         console.log("getting data......");
//         fetch(URL).then((response)=>{
//             console.log(response);
//             return response.json();
//         }).then((data) =>{
//             console.log(data);
//             let i = Math.random() * 5;
//             i = Math.floor(i);
//             fact.innerText = data[i].text;
//         });
//     }
// btn.onclick = ()=> {
//     getFacts();
// };
const getFacts = async () => {
    const response = await fetch(URL);
    console.log(response);
    return response.json();
}
btn.onclick = async () => {
    let fact_text = await getFacts();
    console.log(fact_text)
    let i = Math.random() * 5;
    i = Math.floor(i);
    fact.innerText = fact_text[i].text;
    console.log(fact_text[i].text);
};
// async function getFacts(){
//     console.log("getting data......");
//     let response = await fetch(URL);
//     console.log(response);
// };
// getFacts();
