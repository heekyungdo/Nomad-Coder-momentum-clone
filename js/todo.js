const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";
// whatToDo가 그려질 때마다 그 텍스트를 array에 push할거야
// whatToDo를 그리기 전에 toDos array를 가지고 와서 whatToDo를 push할거야
// 웹이 새로 시작될 때 toDos array는 항상 비어있으면 이전 내용들은 저장이 안돼
// 그래서 항상 비어있는 상태가 아니게 할 건데, 계속 업데이트가 가능하도록 let으로 설정
// 처음 시작할 때 빈칸이 아닌 localStorage에서 발견되는 이전의 toDo로 하고싶다.
let toDos = [];

function saveToDos() {
  // localStorage에 toDos를 저장
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //JSON.stringify는 object나 array 등을 string으로 만들어준다. array모양으로 저장된다.
}

// button을 클릭할 때, event를 얻게 될거야. event는 target을 줄거야
// target은 button이야. 그 button은 부모를 갖고 있어. 그 button의 부모에 접근할 수 있어
function deleteToDo(event) {
  // console.log(event); // 클릭한 버튼에 대한 정보를 얻을 수 있다
  // console.dir(event.target.parentElement.innerText); //event는 property를 가지는데, 어떤 버튼이 클릭되었는지 알려준다. parent 정보를 얻는 이유는 버튼만 삭제하는 것이 아니라 버튼과 todo를 같이 삭제해야하니까.
  // 화면에서 삭제하기 전에 li를 얻는다.
  const li = event.target.parentElement; //li에 저장
  // li를 화면에서 삭제하기 전에 li의 id를 얻는다.
  console.log(li.id);
  // li 삭제
  li.remove();
}

// 화면에 그려주는 함수. 이 함수가 필요로 하는 건 whatToDo 하나 밖에 없다.
function printToDo(newToDo) {
  // 자바스크립트에 li를 추가한다
  const li = document.createElement("li");
  li.id = newToDo.id;
  // 자바스크립트에 span을 추가한다
  const span = document.createElement("span");
  // span에 whatToDo(input value)를 넣어준다
  // newToDo는 object이다. 이 안에 text와 id가 들어있는데, text만 보여주면된다.
  span.innerText = newToDo.text;
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
  const newToDo = toDoInput.value;
  // 사용자가 form을 submit하면, input을 비운다
  toDoInput.value = "";
  // toDos array에 whatToDo를 push할거야. 왜? 이 array를 localStorage에 넣기 위해!
  // 하지만, localStorage에 array를 저장할 수 없어. 오직 텍스트만 저장할 수 있어.
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  // toDos에 whatToDo(텍스트)를 넣어준 후 화면에 printToDo(whatToDo)를 그려준다.
  // printToDo 호출 시 함수에 whatToDo 인자 전달. 즉, 함수에서 whatToDo 값 전달받아올거야
  printToDo(newToDoObj);
  // toDos를 localStorage에 저장
  saveToDos();
}

// form에 이벤트리스너함수를 실행시켜, submit을 실행하면 addToDo 함수가 실행된다
toDoForm.addEventListener("submit", addToDo);

// 아래 arrow function이랑 완전히 같다.
// function sayHello(item) {
//   console.log("This is", item);
// }

const savedToDos = localStorage.getItem(TODOS_KEY);
// console.log(savedToDos);
// 만약 savedToDos가 null이 아니면
if (savedToDos !== null) {
  //JSON.parse를 사용하면 string을 array로 바꿔준다
  const parsedToDos = JSON.parse(savedToDos);
  // parsedToDos가 가지고 있는 각각의 item에 대해 sayHello function을 실행해줘.
  // parsedToDos.forEach(sayHello);
  // console.log(parsedToDos);
  // forEach는 array 내에 있는 item에 대해 function을 실행하게 해준다
  // parsedToDos에 있는 각각의 item에 대해서 console.log를 할거라는 의미
  // parsedToDos.forEach((item) => console.log("This is", item)); //parsedToDos가 갖고 있는 각각의 item에 대해 sayHello function을 실행해줘
  // parsedToDos 배열안에 들은 item들을 printToDo해줄거야
  //  toDos에 parsedToDos를 넣어서 전에 있던 toDos를 복원. 그래야 새로고침 후에도 덮어쓰기 되지 않는다.
  toDos = parsedToDos;
  // forEach함수는 paintToDo를 parsedToDos배열의 요소마다 실행한다.
  // ex) [a,b,c] a때 paintToDo실행, b때 paintToDo실행, c때 paintToDo실행
  parsedToDos.forEach(printToDo); //printToDo({test:"a", id:121212})
}

//.filter에 대한 설명
// sexyFilter함수는 반드시 true를 리턴해야해.
// 만약 새 array에도 이 1,2,3,4를 포함하고 싶으면, flase를 리턴하면 그 item은 새 array에 포함되지 않아
// function sexyFilter() {
// console.log("I'm rich");
// }
// filter는 sexyFilter에 1,2,3,4,5를 넣어서 부를거야.
// sexyFilter를 5번 부르는건데, 부를 때 마다 매번 숫자는 달라진다(1,2,3,4,5).
// [1, 2, 3, 4, 5].filter(sexyFilter);

// 만약 3번째 단계에서 false를 리턴하면, js는 1,2,4,5만 유지할거야.
// sexyFilter(1); //true를 리턴하면 js는 1을 유지할거야.
// sexyFilter(2); //true를 리턴하면 js는 2를 유지할거야.
// sexyFilter(3); //true를 리턴하면 js는 3을 유지할거야.
// sexyFilter(4); //true를 리턴하면 js는 4를 유지할거야.
// sexyFilter(5); //true를 리턴하면 js는 5를 유지할거야.

// function sexyFilter() {
// return true;
// }
// [1, 2, 3, 4, 5].filter(sexyFilter); // (5) [1, 2, 3, 4, 5]

// function sexyFilter() {
// return false;
// }
// [1, 2, 3, 4, 5].filter(sexyFilter); // []

// sexyFilter는 item이 3이 아니면 true를 리턴해야돼.
// item을 저장할 공간을 만들어야해 => item 써준 곳임.
// item이 3이 아니면 true를 리턴해
// function sexyFilter(item) {
// return item !== 3;
// }
// [1, 2, 3, 4, 5].filter(sexyFilter); //(4) [1, 2, 4, 5]
//어떻게 계산할까?
// return 1 !== 3 은 true => 그래서 1은 그대로 있어
// return 2 !== 3 은 true => 그래서 2는 그대로 있어
// return 3 !== 3 은 false => 그래서 3은 유지되지 않아
// return 4 !== 3 은 true => 그래서 4는 그대로 있어
// return 5 !== 3 은 true => 그래서 5는 그대로 있어

// filter 예시
// const arr = ["piano", "trumpet", "percussion"]; // undefined
// function sexyFilter(inst) {
// return inst !== "trumpet";
// } // undefined
// arr.filter(sexyFilter); // (2) ['piano', 'percussion']
