// **************************************************************************
// Task 1 : Define a program with two objects person1 and person2. Person1, person2 both have firstname, lastname properties(use any name you want).
//          Add a function fullname in person1 with two arguments (prefix, suffix), which prints persons fullname using firstname lastname and adds prefix and suffix accordingly if present.
//          Note: this fullname function is present in object person1 only.
//
//          Using call, apply, bind,  print the fullname of person2 with proper parameter passed.
// **************************************************************************
const person1 = {
  firstname: "Khushal",
  lastname: "Rajput",
  fullname: function (prefix, suffix) {
    let fullName =
      (prefix ? prefix : " ") +
      this.firstname +
      " " +
      this.lastname +
      (suffix ? suffix : " ");

    console.log(fullName);
  },
};

const person2 = {
  firstname: "Sujal",
  lastname: "Rami",
};

// Using call
person1.fullname.call(person2, " using Call :  ", " is printed");

// Using apply
person1.fullname.apply(person2, [" using Apply : ", " is printed"]);

// Using bind
const boundFunction = person1.fullname.bind(person2);
boundFunction(" using Bind : ", " is printed");

// Output :  using Call :  Sujal Rami is printed
//           using Apply : Sujal Rami is printed
//           using Bind : Sujal Rami is printed
// **************************************************************************
