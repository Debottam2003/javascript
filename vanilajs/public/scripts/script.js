// hybrid spa
// let hero = document.getElementById("hero");

// function render(path) {
//     hero.innerHTML = "";
//     switch (path) {
//         case "/":
//             window.location.reload();
//             break;
//         case "/about":
//             hero.innerHTML = "<h1>About Page</h1>";
//             break;
//         case "/contact":
//             hero.innerHTML = "<h1>Contact Page</h1>";
//             break;
//         default:
//             hero.innerHTML = "<h1>404 Not Found</h1>";
//     }
// }

// function route(event) {
//     const path = event.target.getAttribute("href");
//     if (path === "/") return;
//     event.preventDefault();
//     window.history.pushState({}, "", path);
//     render(path);
// }

// // Handle back/forward buttons
// window.onpopstate = () => {
//     render(window.location.pathname);
// };

// // Handle page load if on /about or /contact
// if (window.location.pathname !== "/") {
//     render(window.location.pathname);
// }

// window.route = route;

// true spa
let hero = document.getElementById("hero");

function render(path) {
    hero.innerHTML = "";
    switch (path) {
        case "/":
            hero.innerHTML = "<h1>Home Page</h1>";
            break;
        case "/about":
            hero.innerHTML = "<h1>About Page</h1>";
            break;
        case "/contact":
            hero.innerHTML = "<h1>Contact Page</h1>";
            break;
        default:
            hero.innerHTML = "<h1>404 Not Found</h1>";
    }
}

function route(event) {
    const path = event.target.getAttribute("href");
    event.preventDefault();
    window.history.pushState({}, "", path);
    render(path);
}

// Handle back/forward buttons
window.onpopstate = () => {
    render(window.location.pathname);
};

// onload handling
if (window.location.pathname !== "/") {
    render(window.location.pathname);
}

window.route = route;