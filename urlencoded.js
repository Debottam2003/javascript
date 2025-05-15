let user = {
    name: "deb kar",
    age: 22
}

console.log(user);

let url = "http://127.0.0.1:5000?";

for (let key in user) {
    url += `${encodeURIComponent(key)}=${encodeURIComponent(user[key])}&`;
}

url = url.slice(0, url.length - 1);

console.log(url);