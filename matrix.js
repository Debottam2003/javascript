let matrix = [];
let rows = 5;
let columns = 5;
for (let i = 0; i < rows; i++) {
    let temp = [];
    for (let j = 0; j < columns; j++) {
        temp.push(0);
    }
    matrix.push(temp);
}
console.log(matrix);