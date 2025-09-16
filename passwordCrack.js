let password = "0998";
let tries = 0;
for(let i = 0; i < 10000; i++){
    console.log(i.toString(10).padStart(4, 0));
    if(i.toString(10).padStart(4, 0) === password){
        console.log("Password is cracked.");
        break;
    }
    tries++;
}
console.log(tries + " tries required");