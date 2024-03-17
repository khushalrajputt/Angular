const todoText = document.getElementById("todo-text");
const tasks = document.getElementById("tasks");

//Add's Task
function addToDo() {

  const data = todoText.value.trim();
  if (data == "") {
    alert("Please Add Valid Task");
  } else {
    const task = document.createElement("li");
    task.innerHTML = data;

    const deleteBtn = document.createElement("img");
    deleteBtn.src = "assets/img/trash.svg";
    deleteBtn.onclick = delete this;
    task.appendChild(deleteBtn);
    tasks.appendChild(task);
    todoText.value = "";

    save();
  }
}

//Click Event For Task
tasks.addEventListener("click", function (e) {
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName == "IMG") {
    e.target.parentElement.remove();
  }
  save();
});

//Save's Data In LocalStorage
function save() {
  localStorage.setItem("data", tasks.innerHTML);
}

//Retrive Data From LocalStorage
function getData() {
  tasks.innerHTML = localStorage.getItem("data");
}
