let items = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz', '0123456789', '!@#$%^&*()_+'];
let password = '';
for (let i = 0; i < 16; i++) {
    let item = items[Math.floor(Math.random() * items.length)];
    password += item[Math.floor(Math.random() * item.length)];
}
console.log(password);