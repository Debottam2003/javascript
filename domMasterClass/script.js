// window: The entrie browser page (search bar, reload button, back - forward, cookie, local storage,
// audio, video access, print, clipboard) 
// document (The entrie html page or the entire gui page)
// selecting html elements
// html element properties
// DOM manupulation
// evenlistenner

// Let‘s Practice
// Qs. Create a H2 heading element with text - “Hello JavaScript”. Append “from Apna College
// students” to this text using JS

// Qs. Create 3 divs with common class name - “box”. Access them & add some unique text to each
// of them.

// Qs. Create a new button element. Give it a text “click me”, background color of red & text color
// of white.
// Insert the button as the first element inside the body tag.
// Qs. Create a <p> tag in html, give it a class & some styling.
// Now create a new class in CSS and try to append this class to the <p> element.
// Solve this problem using classList.

// console.log(window);
// console.log(document);
// let head = document.getElementById("head");
// console.log(head);

// let p1 = document.getElementsByClassName("p1");
// console.log(p1);

// Array.from(p1).forEach((p) => {
//     console.log(p.textContent);
// });

// let p1 = document.getElementsByTagName("p");
// console.log(p1);
// Array.from(p1).forEach((p) => {
//     console.log(p.textContent);
// });

// upto es5 

// es6 module js
// let select1 = document.querySelector(".p1");
// console.log(select1);
// select1.forEach((p) => {
//     console.log(p.textContent);
// });

// console.log(head.innerHTML = "<h1>Head</h1>");
// console.log(head.id, head.style.color = "red", select1.classList.remove("c2"), select1.classList, select1.className);

// dynamic html element create and added
// let body = document.querySelector("body");

// let element1 = document.createElement("div");
// element1.innerHTML = `
//     <h3>This is a dynamic html element </h1>
//     <p> This is the nextline </p>
// `;
// element1.id = "dynamic-element-1";

// let element2 = document.createElement("div");
// element2.innerHTML = `
//     <h3>This is a dynamic html element </h1>
//     <p> This is the nextline </p>
// `;
// element1.id = "dynamic-element-2";

// body.append(element1);
// body.prepend(element2);
// document.getElementById("this").after(element2);

// window.addEventListener("load", () => {
//     alert("hello");
// });

// body.onclick = () => {
//     alert("hello");
// }

// function hello() {
//     console.log("yoyo");
// }