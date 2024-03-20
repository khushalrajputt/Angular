const answer = document.getElementById("answer");
const problem = document.getElementById("problem");
let calcHistory = localStorage.getItem("calcHistory")==null ? [] :localStorage.getItem("calcHistory").split(",");
let historyData = "";

const basicOperators = ['-', '+'];
const complexOperators = ['%', '/', '*'];
const operators = [...complexOperators, ...basicOperators];

const getData = (data) => {

  const problemText = problem.innerText;
  const problemTextTail = problemText.charAt(problemText.length-1); 

  if(problemText.length === 0 && complexOperators.includes(data)){
    console.log("can'nt start with operator");
  }
  else if(problemText.length !== 0 && ((complexOperators.includes(problemTextTail) && complexOperators.includes(data)) ) ){
    clearr();
    problem.innerText += data;
    console.log("two operators are not allowed");
  }
  else if(problemText.length !== 0 && ((basicOperators.includes(problemTextTail) && basicOperators.includes(data)) ) ){
    clearr();
    problem.innerText += data;
    console.log("two operators are not allowed");
  }
  else if(problemText.length !== 0 && ((basicOperators.includes(problemTextTail) && complexOperators.includes(data)) ) ){
    console.log("two operators are not allowed");
  }
  else{
    problem.innerText += data;
  }
}

const clearAll = () => {
  problem.innerText = "";
  answer.innerText= "";
}

const clearr = () => {
  problem.innerText = problem.innerText.slice(0, -1);
}

const calculate = () => {

    const problemText = problem.innerText;

    try{
      if(operators.includes(problemText.charAt(problemText.length-1))){
        console.log("can'nt end with operator");
      }
      else if(problemText.length === 0){
        answer.innerText="0";
        problem.innerText="0";
      }
      else{
        finalAnswer=eval(problemText);
        finalAnswer=parseFloat(finalAnswer.toFixed(3));
        calcHistory.push(problemText+" = "+finalAnswer);
        saveData();
        answer.innerText=finalAnswer;
        problem.innerText=finalAnswer;
      }
    }
    catch{
      answer.innerText="Error";
      problem.innerText="";
    }
    
}

const fetchHistory = () => {
    historyData = "";
    calcHistory.forEach((value)=>{
    historyData += "<li>"+value+"</li>"; 
  })
  document.getElementById("calc-history").innerHTML=historyData;
}

const saveData = () => {
  localStorage.setItem("calcHistory",calcHistory);
};

const removeData = () => {
  localStorage.removeItem("calcHistory");
  calcHistory = [];
  document.getElementById("calc-history").innerHTML="";
};