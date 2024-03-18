// **************************************************************************
// Task 1 : const arrValue = ['one', 'two', 'three', 'four'];
//          const [ ...x, y] = arrValue;
//          console.log(x);
// **************************************************************************

const arrValue = ["one", "two", "three", "four"];
// const [...x, y] = arrValue;
// Error : Uncaught SyntaxError: Rest element must be last element
console.log(x);

// Output :  Uncaught SyntaxError: Rest element must be last element
// Explanation : we are using rest (x) element as first element then we are using y.
//               it throws error as rest element must be last element
// **************************************************************************

// **************************************************************************
// Task 2 : nested destructuring assignment in arrays
//          const arrValue2 = ["one", ["two", "three"]];
//          const [x, [y, z]] = arrValue;
//          console.log(x);
//          console.log([y,z]);
//          console.log(z);
// **************************************************************************

const arrValue2 = ["one", ["two", "three"]];
const [x, [y, z]] = arrValue2;
console.log(x);
// one
console.log([y, z]);
// ['two', 'three']
console.log(z);
// three

// Output :  one
//           ['two', 'three']
//           three
// Explanation : In above code mapping or destructuring is done as follows :
//               x => "one"
//               [y,z] => ['two','three']  :: y => "two" , z => "three"
// **************************************************************************

// **************************************************************************
// Task 3 : assigning default value 5 and 7
//          let arrValue = [10];
//          let [x = 5,  y = 7] = arrValue;
//          console.log(x);
//          console.log(y);
// **************************************************************************

let arrValue3 = [10];
let [x2 = 5, y2 = 7] = arrValue3;
console.log(x2);
console.log(y2);

// Output :  10
//           7
// Explanation : In above code we are setting default value for x2 and y2.
//               If no value is assigned to them, they will remain with there default values
//               Later in program we are destructuring as below :
//               Before Assignment : x2 = 5(Default), y2 = 7(Default)
//               After Assignment : x2 = 10(New Value), y2 = 7(Default)
// **************************************************************************

// **************************************************************************
// Task 4 :const [a, b, ...[ length ]] = [1, 2, 3];
//         console.log(a, b, length);
// **************************************************************************

const [a, b, ...[length]] = [1, 2, 3];
console.log(a, b, length);

// Output :  1, 2, 3
// Explanation : Did'nt get it
// **************************************************************************

// **************************************************************************
// Task 5 :const [a, b, ...{ length }] = [1, 2, 3];
//         console.log(a, b, length);
// **************************************************************************
{
  const [a2, b2, ...{ length }] = [1, 2, 3];
  console.log(a2, b2, length);
}
// Output :  1, 2, 1
// Explanation : Did'nt get it
// **************************************************************************
