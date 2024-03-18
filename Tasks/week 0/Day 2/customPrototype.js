// **************************************************************************
// Task 1 : Define a program that creates a custom method for the Array or Object prototype,
//          then calls that method on its instance.
// **************************************************************************
//custom prototype sum
Array.prototype.sum = function () {
  let sum = 0;
  for (let i = 0; i < this.length; i++) {
    sum += this[i];
  }
  return sum;
};

const numbers = [1, 1, 1, 1, 1, 1];
console.log(numbers.sum());

// Output :  using Call :  6
// **************************************************************************
