console.log(window.outerWidth);
console.log(window.outerHeight);

console.log(window.innerWidth);
console.log(window.innerHeight);

console.log(window.scrollX);
console.log(window.screenY);

console.log(window.outerWidth);
console.log(window.outerHeight);

// Key points:

// window.screen.width → total screen width

// window.screen.height → total screen height

// window.screen.availWidth / availHeight → screen width/height 
// excluding OS taskbars, docks, or menu bars

console.log("Screen width:", window.screen.width);
console.log("Screen height:", window.screen.height);
console.log("Available width:", window.screen.availWidth);
console.log("Available height:", window.screen.availHeight);

console.log("Total size:", document.documentElement.scrollWidth, document.documentElement.scrollHeight);

const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
const scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;

console.log("Scroll from top:", scrollTop);
console.log("Scroll from left:", scrollLeft);

// Modern way:
console.log("Modern scrollY:", window.scrollY);
console.log("Modern scrollX:", window.scrollX);

const el = document.querySelector("div");

console.log(el.offsetWidth);  // visible width (includes padding + border)
console.log(el.offsetHeight); // visible height (includes padding + border)

console.log(el.clientWidth);  // width including padding, excluding border & margin
console.log(el.clientHeight); // height including padding, excluding border & margin