let option = document.querySelector("#option");
// option.addEventListener("change",(e)=>{
//     let body = document.querySelector("body");
//     body.style.backgroundImage=option.value;
//     //console.log(option.value);
// });
option.addEventListener("change", function (e) {
    let body = document.querySelector("body");
    body.style.backgroundImage = this.value;
    //console.log(option.value);
});
let text = document.querySelector(".head");
let bt = document.querySelector("button");
text.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        console.log(event.type);
        console.log(text.value);
    }
});
bt.onclick = (e) => {
    e.preventDefault();
    console.log(e.type);
    console.log(text.value);
}