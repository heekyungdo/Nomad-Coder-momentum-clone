const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

function paintToDo(newTodo) {
  // console.log("I will paint", newTodo);
  const li = document.createElement("li");
  const span = document.createElement("span");
  // li는 span이라는 자식을 갖게 됐어. (li>span)
  li.appendChild(span);
  span.innerText = newTodo;
  // console.log(li);

  // toDoList (ul) 안에 li 넣기
  toDoList.appendChild(li);
}

// 자바스크립트가 방금 발생한 event를 handleToDoSubmit함수의 첫번째 인자로 준다.
function handleToDoSubmit(event) {
  event.preventDefault();
  //   input에 입력한 값 받기
  //   console.log(toDoInput.value);

  //   input value를 비우기 전에 그 값을 저장
  //   toDoInput.value를 비웠다고 해서 newToDo가 비워지는 것을 의미하는 것은 아님.
  //   우리가 하는 건 input의 value를 새로운 변수에 복사하는 것일 뿐
  //   input의 현재 value를 새로운 변수에 복사하는 것
  // 여겨서 newToDo는 input의 value를 비우기 전의 값을 나타낸다.
  const newTodo = toDoInput.value;
  //   toDoInput의 value에 빈 값("")넣는 것. -> 엔터치면 input내 text가 사라짐.
  // console.log(toDoInput.value);
  //   newToDo 변수와 아무 상관이 없다.
  toDoInput.value = "";
  //   newTodo.innerText = localStorage.setItem("toDoList", `${toDoInput.value}`);
  // console.log(newTodo, toDoInput.value);

  // paintToDo 함수를 호출하고, newTodo를 painToDo한테 보낸다.
  paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
