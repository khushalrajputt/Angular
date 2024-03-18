// **************************************************************************
// Task 1 : Write a factorial program of given range: 0 - 10 using closure.
// **************************************************************************

function getFactorial() {
  // Calculate factorial of a number using closure
  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }

  return factorial;
}

// Factorial function using closure
const factorial = getFactorial();

// factorial for numbers in the range: 0 - 10 using closure
for (var i = 0; i <= 10; i++) {
  console.log("Factorial of " + i + " is " + factorial(i));
}
// **************************************************************************

// **************************************************************************
// Task 2 : Write an output with explaination.
// **************************************************************************
function calculate(x) {
  function multiply(y) {
    return x * y;
  }
  return multiply;
}

const multiply3 = calculate(3);
const multiply4 = calculate(4);

console.log(multiply3);
// Output : ƒ multiply(y){ return x*y; }
// Explanation : calculate return's multiply functions

console.log(multiply3());
// Output : NaN
// Explanation : value of x=3 and y=undefined, we are performing 3*undefined = NaN

console.log(multiply3(6));
// Output : 18
// Explanation : value of x=3 and y=6, we are performing 3*6 = 18

console.log(multiply4(2));
// Output : 8
// Explanation : value of x=4 and y=2, we are performing 4*2 = 8
// **************************************************************************

// **************************************************************************
// Task 3 : Write an output with explanation
// **************************************************************************

function outest() {
  var c = 12;
  function outer(b) {
    function inner() {
      console.log(a, b, c);
      // a=10 - hoisting
      // b="Hi Closures" - passed as argument
      // c=12 - declared inside the scope of function
    }
    let a = 10; // let instead of var
    return inner;
  }
  return outer;
}
let a = 100;
var close = outest()("Hi Closures");
close();

//Output : 10 'Hi Closures' 12
// Explanation :  Execution steps :
//                1) Program will declare a=100.
//                2) outest function is called with no parameters.
//                          i. c = 12 declared.
//                         ii. outer() returns.
//                3) outer is called with "Hi Closures" Parameter.
//                          i. a = 10 declared
//                         ii. inner() returns
//                4) close is intialized with inner()
//                1) close is called
// **************************************************************************

// **************************************************************************
// Task 4 : Write an output with explanation:
// **************************************************************************

function setCount() {
  let number = 0;
  return function () {
    console.log(number++);
    console.log(++number);
  };
}
const counter = setCount();
counter();
// 0
// 2
counter();
// 2
// 4
counter();
// 4
// 6

//Output : 0
//         2
//         2
//         4
//         4
//         6
// Explanation :  Execution steps :
//                1) counter is intialized with setCount's Anonymous function
//                2) counter is called 1st time
//                          i. number = 0
//                         ii. number is printed then incremented by 1 : number++
//                        iii. number = 1
//                         iv. number is incremented by 1 then printed on console : ++number
//                          v. number = 2
//                3) counter is called 2nd time
//                          i. number = 2
//                         ii. number is printed then incremented by 1 : number++
//                        iii. number = 3
//                         iv. number is incremented by 1 then printed on console : ++number
//                          v. number = 4
//                4) counter is called 3rd time
//                          i. number = 4
//                         ii. number is printed then incremented by 1 : number++
//                        iii. number = 5
//                         iv. number is incremented by 1 then printed on console : ++number
//                          v. number = 6
// **************************************************************************
