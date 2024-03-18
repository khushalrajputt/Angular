// **************************************************************************
// Task 1 : Converts a specified number to an array of digits.
//          Input - 123
//          Output- [1,2,3]
// **************************************************************************
const input = 123;

// Get Array of string
const stringOutput = [...String(number)];
// stringOutput=['1','2','3']

// convert string Array to Numeric Arrray
let numberOutput = [];
stringOutput.forEach((n) => {
  numberOutput.push(Number(n));
});

console.log(numberOutput);

// Output : [1, 2, 3]
// Explanation : Spread Operators can work on array. string is an array of characters.
//               we converted string to Array of characters then Array of numbers

// **************************************************************************

// **************************************************************************
// Task 2 :  var alphabets = ["A", ..."BCD", "E"];
//    	     console.log(alphabets);
// **************************************************************************
var alphabets = ["A", ..."BCD", "E"];
console.log(alphabets);

// Output :  ['A', 'B', 'C', 'D', 'E']
// Explanation : A and E passed without spreading and "BCD" is passed with spread operator,
//               which is spreaded to 'B','C','D'

// **************************************************************************

// **************************************************************************
// Task 3 : var newArray = [...[,,]];
//          console.log(newArray);
// **************************************************************************
var newArray = [...[, ,]];
console.log(newArray);

// Output :  [undefined, undefined]
// Explanation : Here spread operator is used with an array having 2 elements =>
//                      i. undefined
//                     ii. undefined
//               which is spreaded to undefined, undefined and feeded to newArray
//               Here Js is ignoring tail empty comma
// **************************************************************************
