const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

// button을 클릭할 때, event를 얻게 될거야. event는 target을 줄거야.
// target은 button이야. 그 button은 부모를 갖고 있어. 그 button의 부모에 접근할 수 있어.
function deleteToDo(event) {
  // console.log(event); // 클릭한 버튼에 대한 정보를 얻을 수 있다.
  // console.dir(event.target.parentElement.innerText); //event는 property를 가지는데, 어떤 버튼이 클릭되었는지 알려준다. parent 정보를 얻는 이유는 버튼만 삭제하는 것이 아니라 버튼과 todo를 같이 삭제해야하니까.
  const li = event.target.parentElement; //li에 저장.
  // li 삭제
  li.remove();
}

function printToDo(whatToDo) {
  // 자바스크립트에 li를 추가한다.
  const li = document.createElement("li");
  // 자바스크립트에 span을 추가한다.
  const span = document.createElement("span");
  // span에 whatToDo(input value)를 넣어준다.
  span.innerText = whatToDo;
  // 자바스크립트에 button을 추가한다.
  const btn = document.createElement("button");
  // 버튼의 텍스트를 바꿔준다.
  btn.innerText = "❌";
  // btn을 클릭하면 deleteToDo 함수가 실행된다.
  btn.addEventListener("click", deleteToDo);
  // ul>li>span, btn 구조
  li.appendChild(span);
  li.appendChild(btn);
  // ul>li구조
  toDoList.appendChild(li);
}

function addToDo(event) {
  // default값(새로고침)을 없애준다.
  event.preventDefault();
  // whatToDo변수에 input value를 넣어준다.
  const whatToDo = toDoInput.value;
  // input 값 넣은 이후에 input 창 비워주기
  toDoInput.value = "";
  // printToDo 호출 시 함수에 whatToDo 인자 전달. 즉, 함수에서 whatToDo 값 전달받아올거야
  printToDo(whatToDo);
}

// form에 이벤트리스너함수를 실행시켜, submit을 실행하면 addToDo 함수가 실행된다.
toDoForm.addEventListener("submit", addToDo);
