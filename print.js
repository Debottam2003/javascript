let { log } = console;
let print = log;

// Arithmetic + string coercion
print([] + []);          // ""   (empty array → "" → string concatenation)
print([] + {});          // "[object Object]"
print({} + []);          // "[object Object]"
print({} + {});          // "[object Object][object Object]"

// Boolean coercion
print(true + true);      // 2   (true → 1)
print(true == 1);        // true
print(true === 1);       // false (strict equality)

// Null & undefined quirks
print(null == undefined); // true
print(null === undefined);// false
print(null + 1);          // 1   (null → 0)
print(undefined + 1);     // NaN (undefined → NaN)

// String & number coercion
print("5" - 3);          // 2   ("5" → number)
print("5" + 3);          // "53" (string concatenation)
print("five" * 2);       // NaN
print("5" * "2");        // 10

// Empty array/object coercion
print([] == 0);          // true  ([] → "" → 0)
print([0] == 0);         // true  ([0] → "0" → 0)
print([1] == 1);         // true
print([1,2] == "1,2");   // true (toString of array)

// Weird ones
print(false == "0");     // true
print(false == "false"); // false
print("" == []);         // true  (both → "")
print(0 == []);          // true  ([] → 0)
print(0 == {});          // false
print("" == {});         // false

// NaN behavior
print(NaN == NaN);       // false
print(NaN === NaN);      // false
print(Object.is(NaN, NaN)); // true (special case check)

// Basic cases
print(false === 0);       // false  (boolean vs number)
print(false === "");      // false  (boolean vs string)
print("" === 0);          // false  (string vs number)
print(null === undefined);// false  (different types)

// Arrays/objects
print([] === 0);          // false  (array vs number)
print([0] === 0);         // false
print([1] === "1");       // false
print([1,2] === "1,2");   // false

// Strings vs numbers
print("5" === 5);         // false  (string vs number)
print("5" === "5");       // true   (same string type & value)

// NaN is still weird
print(NaN === NaN);       // false  (NaN never equals itself)
print(Object.is(NaN, NaN));// true   (safe way to check NaN)

// Objects
print({} === {});         // false  (different references)
let obj = {};
print(obj === obj);       // true   (same reference)

