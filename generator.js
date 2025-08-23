function* numbers(){
  yield 1;
  yield 2;
  yield 3;
}

const gen = numbers();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }

// function* syntax
// Declares a generator function. The * indicates that this function can be paused and resumed.

// yield keyword
// Inside a generator, yield is used to produce values one at a time. Each call to .next() resumes the function until the next yield.

// Return type in TypeScript
// Generator functions return an iterator object that conforms to the Generator interface.

function* oneYield() {
  yield 42;
}

function test() {
  const gen1 = oneYield();
  const gen2 = oneYield();

  console.log(gen1.next()); // { value: 42, done: false }
  console.log(gen1.next()); // { value: undefined, done: true }

  console.log(gen2.next()); // { value: 42, done: false }
  console.log(gen2.next()); // { value: undefined, done: true }
}

test();
