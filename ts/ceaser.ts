console.log("This is a Ceaser Cypher");
function encoder(plaintext: String) {
    let ct = "";
    for(let i = 0; i < plaintext.length; i++) {
        ct += String.fromCharCode(plaintext[i].charCodeAt(0) + 3);
    }
    console.log(ct);
    return ct;
}
function decoder(cyphertext: String) {
    let pt = "";
    for(let i = 0; i < cyphertext.length; i++) {
        pt += String.fromCharCode(cyphertext[i].charCodeAt(0) - 3);
    }
    console.log(pt);
    return pt;
}
let ct = encoder("attack is to night");
let pt = decoder(ct);