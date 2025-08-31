let n = document.getElementById("name");
// console.dir(n);
// console.log(n);
let head = document.getElementsByClassName("head");
// console.dir(head);
// console.log(head);
let button = document.getElementsByTagName("button");
// console.dir(button);
// console.log(button);
let tag = document.querySelector("div");
// console.dir(tag);
// console.log(tag);
let tags = document.querySelectorAll("div");
// console.log(tags);
// console.log(n.tagName);
// console.log(n.innerText);
// console.log(n.innerHTML);
// console.log(tag.innerText);
// console.log(tag.innerHTML);
let h = document.querySelector(".head");
// console.log(h.tagName);
// console.log(h.innerText);
// console.log(h.innerHTML);
// for(let i of tags){
//     console.log(i.innerText);
//     console.log(i.innerHTML);
// }
// for(let i=0;i<tags.length;i++){
//     console.log(tags[i].innerText);
//     console.log(tags[i].innerHTML);
//console.log(tags[i].innerContent);
//}
//Not useable have some issues to iterate over nodelists
//for(let i in tags){
//     console.log(tags[i].innerText);
//     console.log(tags[i].innerHTML);
// }
//tag.innerHTML = "<div> Hi I am New</div>";
//console.log(tag.textContent = "hi");
let user = document.querySelector(".username");
// console.log(user.getAttribute("name"));
// console.log(user.getAttribute("value"));
// console.log(user.getAttribute("type"));
// console.log(user.getAttribute("placeholder"));
user.style.color = "red";
user.style.backgroundColor = "black";
// let new_btn = document.createElement("br");
let love = document.querySelector(".love");
// love.append(new_btn);
// new_btn = document.createElement("button");
// new_btn.innerText = "love";
// love.append(new_btn);
// new_btn.style.color="blue";
//node.append(el)
//node.prepend(el)
//node.before(el)
//node.after(el)
let mark = document.querySelector(".head");
love.prepend(mark);

console.log(window.screen.width);   // total screen width (monitor resolution)
console.log(window.screen.height);  // total screen height (monitor resolution)

console.log(window.screenX);  // x-coordinate of the window’s top-left corner on the screen
console.log(window.screenY);  // y-coordinate of the window’s top-left corner on the screen

console.log(window.scrollX);  // horizontal scroll amount of the document (same as pageXOffset)
console.log(window.scrollY);  // vertical scroll amount of the document (same as pageYOffset)

console.log(document.body.scrollWidth);
console.log(document.body.scrollHeight);

console.log(document.body.clientWidth);
console.log(document.body.clientHeight);

console.log(document.body.scrollTop);
console.log(document.body.scrollLeft);
// document.body.scrollTop → The number of pixels the <body> is scrolled vertically.

// document.body.scrollLeft → The number of pixels the <body> is scrolled horizontally.

// ❌ Non-existent properties:

// scrollRight → does not exist, will return undefined.

// scrollBottom → also does not exist, will return undefined.

// ✅ How to compute them yourself:

// Scroll Right: how far you are from the right edge

let scrollRight = document.body.scrollWidth - document.body.clientWidth - document.body.scrollLeft;
console.log(scrollRight);

let scrollBottom = document.body.scrollHeight - document.body.clientHeight - document.body.scrollTop;
console.log(scrollBottom);

