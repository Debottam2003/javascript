function customSplit(regularExpression, basis) {
  let regex = regularExpression + basis
  let dataArray = [];
  let j = 0;
  for (let i = 0; i < regex.length; i++) {
    if (regex[i] === basis) {
      let str = "";
      while (j < i) {
        str += regex[j];
        j++;
      }
      j++;
      dataArray.push(str);
    }
  }
  console.log(dataArray);
}
let regex = "my-name-is-debottam-kar";
customSplit(regex, "-");
customSplit("a b c", " ");

// function customSplit(str, delimiter) {
//   let result = [];
//   let start = 0; // Start index of current segment

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === delimiter) {
//       result.push(str.slice(start, i));
//       start = i + 1; // move start to after delimiter
//     }
//   }
//   // push the last segment after the last delimiter
//   result.push(str.slice(start));

//   return result;
// }

// let regex = "my-name-is-debottam-kar";
// console.log(customSplit(regex, "-"));

