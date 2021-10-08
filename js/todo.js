const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";
// whatToDo가 그려질 때마다 그 텍스트를 array에 push할거야
// whatToDo를 그리기 전에 toDos array를 가지고 와서 whatToDo를 push할거야
const toDos = [];

function saveToDos() {
  // localStorage에 toDos를 저장
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //JSON.stringify는 object나 array 등을 string으로 만들어준다. array모양으로 저장된다.
}

// button을 클릭할 때, event를 얻게 될거야. event는 target을 줄거야
// target은 button이야. 그 button은 부모를 갖고 있어. 그 button의 부모에 접근할 수 있어
function deleteToDo(event) {
  // console.log(event); // 클릭한 버튼에 대한 정보를 얻을 수 있다
  // console.dir(event.target.parentElement.innerText); //event는 property를 가지는데, 어떤 버튼이 클릭되었는지 알려준다. parent 정보를 얻는 이유는 버튼만 삭제하는 것이 아니라 버튼과 todo를 같이 삭제해야하니까.
  const li = event.target.parentElement; //li에 저장
  // li 삭제
  li.remove();
}

function printToDo(whatToDo) {
  // 자바스크립트에 li를 추가한다
  const li = document.createElement("li");
  // 자바스크립트에 span을 추가한다
  const span = document.createElement("span");
  // span에 whatToDo(input value)를 넣어준다
  span.innerText = whatToDo;
  // 자바스크립트에 button을 추가한다
  const btn = document.createElement("button");
  // 버튼의 텍스트를 바꿔준다
  btn.innerText = "❌";
  // btn을 클릭하면 deleteToDo 함수가 실행된다
  btn.addEventListener("click", deleteToDo);
  // ul>li>span, btn 구조
  li.appendChild(span);
  li.appendChild(btn);
  // ul>li구조
  toDoList.appendChild(li);
}

function addToDo(event) {
  // default값(새로고침)을 없애준다
  event.preventDefault();
  // whatToDo변수에 input value를 넣어준다
  const whatToDo = toDoInput.value;
  // 사용자가 form을 submit하면, input을 비운다
  toDoInput.value = "";
  // toDos array에 whatToDo를 push할거야. 왜? 이 array를 localStorage에 넣기 위해!
  // 하지만, localStorage에 array를 저장할 수 없어. 오직 텍스트만 저장할 수 있어.
  toDos.push(whatToDo);
  // toDos에 whatToDo(텍스트)를 넣어준 후 화면에 printToDo(whatToDo)를 그려준다.
  // printToDo 호출 시 함수에 whatToDo 인자 전달. 즉, 함수에서 whatToDo 값 전달받아올거야
  printToDo(whatToDo);
  // toDos를 localStorage에 저장
  saveToDos();
}

// form에 이벤트리스너함수를 실행시켜, submit을 실행하면 addToDo 함수가 실행된다
toDoForm.addEventListener("submit", addToDo);

// 아래 arrow function이랑 완전히 같다.
/* function sayHello(item) {
  console.log("This is", item);
} */

const savedToDos = localStorage.getItem(TODOS_KEY);
// console.log(savedToDos);
// 만약 savedToDos가 null이 아니면
if (savedToDos !== null) {
  //JSON.parse를 사용하면 string을 array로 바꿔준다
  const parsedToDos = JSON.parse(savedToDos);
  // console.log(parsedToDos);
  // forEach는 array 내에 있는 item에 대해 function을 실행하게 해준다
  // parsedToDos에 있는 각각의 item에 대해서 console.log를 할거라는 의미
  parsedToDos.forEach((item) => console.log("This is", item)); //parsedToDos가 갖고 있는 각각의 item에 대해 sayHello function을 실행해줘
}

//자바스크립트는 array에 있는 각각의 item에 대해 function을 실행할 수 있게 해준다.
