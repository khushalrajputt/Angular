let answer = document.getElementById("answer");
let problem = document.getElementById("problem");

function getData(data) {
  problem.innerText += data;
}
function clearAll() {
  problem.innerText = "";
  answer.innerText= "";
}
function clearr() {
  problem.innerText = problem.innerText.slice(0, -1);
}
function calculate() {
    answer.innerText=eval(problem.innerText);
    problem.innerText="";
}
