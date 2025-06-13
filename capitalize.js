let google = "this is the new debottam this the best debottam";
function capitalize(str) {
    return str.split(" ")
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" ");
}
console.log(capitalize(google));