function updateUserField(field, value) {
    if (user.hasOwnProperty(field)) {
        user[field] = value;
    } else {
        console.log(`Field "${field}" does not exist on the user object.`);
    }
}

const user = {
    name: "John Doe",
    age: 30,
    email: "johndoe@example.com",
    isActive: true
};

console.log(user);
// Example usage:
updateUserField("age", 35);
updateUserField("email", "newemail@example.com");
console.log(user);
