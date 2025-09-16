// function spread(a: Number, b: Number, c: Number) {
//       console.log(a, b, c);
// }
// spread(...[10, 20, 30]);

// let arr: Number[] = [1, 3, 5];
// console.log(arr);

function sum(...numbers: number[]) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4));

function greet(greeting: string, ...names: string[]) {
  return names.map((name) => `${greeting}, ${name}!`).join(" ");
}

console.log(greet("Hello", "Alice", "Bob", "Charlie"));
// "Hello, Alice! Hello, Bob! Hello, Charlie!"
