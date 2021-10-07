const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

function printToDo(whatToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.appendChild(span);
  span.innerText = whatToDo;
  toDoList.appendChild(li);
}

function addedToDoList(event) {
  event.preventDefault();
  const whatToDo = toDoInput.value;
  toDoInput.value = "";
  printToDo(whatToDo);
}

toDoForm.addEventListener("submit", addedToDoList);
