// **************************************************************************
// Task 1 :List down techniques with examples where hoisting does not work as expected in JS.
// **************************************************************************

// i. Variable with let
console.log(a);
let a = 10;
// Error : Uncaught ReferenceError: a is not defined

// ii. Variable with const
console.log(b);
let b = 10;
// Error : Uncaught ReferenceError: b is not defined

// iii. Function declaration with let
console.log(myFun);
let myFun = function () {
  console.log("Hello JS");
};
// Error : Uncaught ReferenceError: myFun is not defined

// iv. Function declaration with const
console.log(myFun2);
const myFun2 = function () {
  console.log("Hello JS");
};
// Error : Uncaught ReferenceError: myFun2 is not defined




// **************************************************************************
// Task 2: Give output:
// **************************************************************************

var a2 = 4;
function greet() {
  b = "hello";
  console.log(b);
  // hello
  var b;
}
greet();

console.log(b);
// Uncaught ReferenceError: b is not defined

// Output : hello
//          Uncaught ReferenceError: b is not defined
// Explanation : var b has scope inside greet function only. it throw errors if used outside its scope
