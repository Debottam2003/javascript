for (let i = 1; i <= 8; i++) {
    let str = "";
    for (let j = 1; j <= 8; j++) {
        if (i % 2 === 0) {
            if (j % 2 === 0) {
                str += "B"
            } else {
                str += "W"
            }
        } else {
            if (j % 2 === 0) {
                str += "W"
            } else {
                str += "B"
            }
        }
    }
    console.log(str);
}