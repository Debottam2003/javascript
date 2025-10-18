let firstname = document.querySelector("#firstname");
let lastname = document.querySelector("#lastname");
let enter = document.querySelector("#enter");
let cookievar = document.querySelector("#cookie");
enter.addEventListener('click', () => {
    console.log(firstname.value);
    setcookie("user1f", firstname.value, 365);
    setcookie("user1l", lastname.value, 365);
})
cookievar.addEventListener('click', () => {
    firstname.value = getcookie("user1f");
    lastname.value = getcookie("user1l");
})
// document.cookie = "firstname=deb; expires = 1 January 2000 12:00:00 UTC;path=/";
// document.cookie = "name=debottamkar; expires = 1 January 2000 12:00:00 UTC;path=/";
// console.log(document.cookie);
// document.cookie = "name=debottamkar; expires = 1 January 2000 12:00:00 UTC;path=/";
// console.log(document.cookie);
// const d = new Date();
// console.log(date.toUTCString());
function setcookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value};${expires};path=/`;
}
// setcookie("age2",22,365);
// console.log(document.cookie);
// function delcookie(name){
//      setcookie(name,null,(-365));
// }
// delcookie("age1");
// console.log(document.cookie,"done");
// console.log(document.cookie);
function getcookie(name) {
    const cdecoded = decodeURIComponent(document.cookie);
    const carray = cdecoded.split("; ");
    let res = null;
    carray.forEach((element) => {
        if (element.startsWith(name + "=")) {
            //console.log(element.substring(name.length + 1));
            res = element.substring(name.length + 1)
        }
    })
    return res;
}
// console.log(getcookie("age2"));