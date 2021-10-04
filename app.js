// HTML에서 id=login-form을 찾고 있어.
// JS가 loginForm을 찾고 있다면, loginForm은 HTML 내에 있는 element라는 뜻.
// 그 element는 바로 <div id="login-form"></div>야.
// const loginForm = document.getElementById("login-form");
// document에서 찾는 대신에 const loginForm에서 찾을거야.
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

// 위 세 코드를 짧고, 쉽게 바꾼 것
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
// string만 포함된 변수는 대문자로 표기하고, string을 저장하고 싶을 때 대문자 사용
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
// const link = document.querySelector("a");
// const loginButton = document.querySelector("#login-form button");

// function onLoginBtnClick() {
// 이렇게 쓰면 <input tyle="text" placeholder="What is your name?">가 console에 입력됌.
// HTML과 같은 트리 구조로 출력
// console.log("hello", loginInput.value);
// 이렇게 쓰면 loginInput의 내부를 보여줘. JSON과 같은 트리구조로 출력
// console.dir(loginInput);
// console.log("click!!");

// const username = loginInput.value;
// if (username === "") {
//   alert("Please write your name.");
// } else if (username.length > 15) {
//   alert("Your name is too long.");
// }
// console.log(username);
// }
// 클릭 이벤트는 loginButton과 연결되어 있어야돼
// loginButton에 대한 click을 감지
// loginButton.addEventListener("click", onLoginBtnClick);

// submit event 감지
// 새로고침 일어나는 건 form submit의 기본 동작.
function onLoginSubmit(event) {
  // preventDefault는 어떤 event의 기본 행동이 발생되지 않도록 막는것.
  // 입력값은 저장하고
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const usernameThatTheUserWrote = loginInput.value;
  localStorage.setItem(USERNAME_KEY, usernameThatTheUserWrote);
  // user의 이름을 변수로 저장해주고, 그 이름은 h1 안에 넣어준다.
  // string과 변수를 하나로 합치는 두가지 방법 (아래 두줄)
  // greeting.innerText = "Hello " + usernameThatTheUserWrote;

  // paintGreetings함수는 usernameTHatTheUwerWorte의 인자값을 가져온다.
  // input의 value값을 인자로 넣어준다.
  paintGreetings(usernameThatTheUserWrote);
  // hidden이라는 class name을 더해줘서 form을 숨기고
  console.log(usernameThatTheUserWrote);
  // console.log(loginInput.value);
  // const username = loginInput.value;
  // console.log(username);
}

// ()을 더하면 브라우저가 보자마자 자동으로 이 function을 실행시킬거야.
// onLoginSubmit();

// function handleLinkClick(event) {
//   event.preventDefault();
//   console.dir(event);
// alert이 이 page가 다른 동작을 하지 못하도록 막고 있어. 확인 버튼을 누른 이후엔
// default값이 실행된다.
// alert("clicked!");
// }

// link.addEventListener("click", handleLinkClick);

// JS는 함수를 실행시키는 동시에 그 함수에 첫번째 인자로 object를 넣어 줄것임.
// 그리고 object에는 방금 일어난 event에 대한 여러 정보가 담겨있다.
// handleLinkClick({information about the event that just happened});

function paintGreetings(usernameThatTheUserWrote) {
  // const username = localStorage.getItem(USERNAME_KEY);
  // 이름을 추가한 다음에
  greeting.innerText = `Hello ${usernameThatTheUserWrote}!`;
  // greeing한테서 HIDDEN_CLASSNAME을 제거해주기
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

// local storage에서 username이라는 키를 가져와
const savedUsername = localStorage.getItem(USERNAME_KEY);

// if savedUsername = null
if (savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  // addEventListener는 브라우저가 바로 실행시키려는게 아니라 submit을 해야 실행된다.
  loginForm.addEventListener("submit", onLoginSubmit);
  // 그렇지 않으면, show the greetings
} else {
  // paintGreetings 함수는 위와 달리 local storage로부터유저 정보를 받는다.
  paintGreetings(savedUsername);
}
