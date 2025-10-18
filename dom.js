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
// Not useable have some issues to iterate over nodelists
// for(let i in tags){
//     console.log(tags[i].innerText);
//     console.log(tags[i].innerHTML);
// }
// tag.innerHTML = "<div> Hi I am New</div>";
// console.log(tag.textContent = "hi");
let user = document.querySelector(".username");
// console.log(user.getAttribute("name"));
// console.log(user.getAttribute("value"));
// console.log(user.getAttribute("type"));
// console.log(user.getAttribute("placeholder"));
user.style.color="red";
user.style.backgroundColor="black";
// let new_btn = document.createElement("br");
let love = document.querySelector(".love");
// love.append(new_btn);
// new_btn = document.createElement("button");
// new_btn.innerText = "love";
// love.append(new_btn);
// new_btn.style.color="blue";
// node.append(el)
// node.prepend(el)
// node.before(el)
// node.after(el)
let mark = document.querySelector(".head");
love.prepend(mark);

