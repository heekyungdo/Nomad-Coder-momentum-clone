const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// submit 이벤트 리스너에 의해 함수 실행
function onLoginSubmit(event) {
  // submit의 default인 새로고침을 없앤다.
  event.preventDefault();
  //class"hidden"을 다시 더하여 form을 보이지 않게 한다.
  loginForm.classList.add(HIDDEN_CLASSNAME);
  // input text의 value를 usernameThatTheUwerWorte 변수에 저장한다.
  const usernameThatTheUserWrote = loginInput.value;
  // local storage에 key:value를 저장한다. (key=username , value=usernameThatTheUserWorte)
  localStorage.setItem(USERNAME_KEY, usernameThatTheUserWrote);
  // 유저 정보가 input으로 부터 온다.
  paintGreetings(usernameThatTheUserWrote);
}

// onLoginSubmit 함수와 else의 코드가 중복되니 새로운 함수 생성하여 코드 중복되지 않게 한다.
// usernameThatTheUserWrote을 인자로 받는 함수
// 우리가 함수를 호출하는 위치에 따라 유저 정보는 다른 곳에서 오게 할거야
function paintGreetings(usernameThatTheUserWrote) {
  greeting.innerText = `Hello, ${usernameThatTheUserWrote}!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

// localStorage에 key값이 있는지 확인하기 위해 key값 가져온다
const savedUsername = localStorage.getItem(USERNAME_KEY);

// 만약 localStorage에 key와 value가 없어 null인 상태면
if (savedUsername === null) {
  // form을 보여준다. class="hidden"을 없앰으로서
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  // form에 있는 submit이 이벤트리슨되면, onLoginSubmit 함수 실행
  loginForm.addEventListener("submit", onLoginSubmit);
  // if값이 거짓이면 실행
} else {
  // 유저 정보가 local storage로 부터 온다.
  // local storage에 유저 정보가 있으면 거기서 유저 정보를 받아서 인자로 넣어준다.
  paintGreetings(savedUsername);
}
