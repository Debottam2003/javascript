let data = [
    { id: 1, name: 'deb', email: 'deb@gmail.com', message: 'hi' },
    { id: 2, name: 'sri', email: 'sri@gmail.com', message: 'yo' },
    { id: 3, name: 'd', email: 'deb@gmail.com', message: 'js is the best' }
];
data.forEach((items) => {
    console.log(items.id, items.name, items.email, items.message);
})