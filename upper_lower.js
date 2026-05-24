function upper(str) {
    s = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 'a' && str[i] <= 'z') {
            s += String.fromCharCode(str.charCodeAt(i) - 32);
            // s += String.fromCharCode(65 + (str.charCodeAt(i) - 97));
        } else {
            s += str[i];
        }
    }
    console.log(s);
    return s;
}

function lower(str) {
    s = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 'A' && str[i] <= 'Z') {
            // s += String.fromCharCode(str.charCodeAt(i) + 32);
            s += String.fromCharCode(97 + (str.charCodeAt(i) - 65));
        }
        else {
            s += str[i];
        }
    }
    console.log(s);
    return s;
}

upper("Hello World!");
lower("HELLO WORLD!");
