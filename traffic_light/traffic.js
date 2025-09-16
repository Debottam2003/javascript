let signal = "red";
let red = document.querySelector(".red");
let yellow = document.querySelector(".yellow");
let green = document.querySelector(".green");

function traffic() {
    if(signal === "green"){
        green.style.backgroundColor = "black";
        yellow.style.backgroundColor = "rgb(216, 192, 36)";
        setTimeout(()=>{
            yellow.style.backgroundColor = "black";
            red.style.backgroundColor = "rgb(194, 5, 5)";
            signal = "red";
    }, 2000);
    }
    else {
        red.style.backgroundColor = "black";
        green.style.backgroundColor = "rgb(95, 206, 26)";
        signal = "green";
    }
}
setInterval(traffic, 10000);