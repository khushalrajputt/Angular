let array1 = [1, 2, 3, 4, 5, 6];
const array2 = [0, 23, 0, 0, 0, 4, 6, 0, 8, 10, 0, 0, 0, 12];
let array2Result = [];

function performTask2A() {
  for (let i = 0; i < array1.length; i++) {
    array1[i] *= 2;
  }
}

function performTask2B() {
  //filter
  array2.forEach((x) => {
    if (x > 0) { array2Result.push(x); }
  } );

  const requiredLength = array2.length - array2Result.length;

  //fill
  for (let i = 0; i < requiredLength; i++) {
    array2Result.push(0);
  }
}

function performTask() {

  //Task 2A
  document.getElementById("task2AInput").innerText = " Input Array : [" + array1 + "]";
  performTask2A();
  document.getElementById("task2A").innerText = " Output Array : [" + array1 + "]";

  //Task 2B
  document.getElementById("task2BInput").innerText = " Input Array : [" + array2 + "]";
  performTask2B();
  document.getElementById("task2B").innerText = " Output Array : [" + array2Result + "]";
  
}
