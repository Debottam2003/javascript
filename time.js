let date = new Date();
console.log(Date.now()); // Static function of the Date class or the Date constructor function
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString())
console.log(date.toLocaleString()); // most useful
console.log(date.toISOString());
console.log(date.getTime());
console.log(date.getFullYear());
console.log(date.getMonth() + 1); // Months are zero-based
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.toUTCString());
console.log(date.getDay()); // Day of the week (0 = Sunday, 6 = Saturday)
console.log(date.getMilliseconds());

// console.log(date.getTimezoneOffset()); // Difference, in minutes, between UTC and local time
// console.log(date.valueOf()); // Same as getTime()
// console.log(date.toJSON()); // JSON representation (ISO string)