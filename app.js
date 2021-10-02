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
const link = document.querySelector("a");
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
  event.preventDefault();
  console.log(loginInput.value);
  // const username = loginInput.value;
  // console.log(username);
}

// addEventListener는 브라우저가 바로 실행시키려는게 아니라 submit을 해야 실행된다.
loginForm.addEventListener("submit", onLoginSubmit);
// ()을 더하면 브라우저가 보자마자 자동으로 이 function을 실행시킬거야.
// onLoginSubmit();

function handleLinkClick(event) {
  console.log(event);
  // alert이 이 page가 다른 동작을 하지 못하도록 막고 있어. 확인 버튼을 누른 이후엔
  // default값이 실행된다.
  alert("clicked!");
}

link.addEventListener("click", handleLinkClick);

// JS는 함수를 실행시키는 동시에 그 함수에 첫번째 인자로 object를 넣어 줄것임.
// 그리고 object에는 방금 일어난 event에 대한 여러 정보가 담겨있다.
// handleLinkClick({information about the event that just happened});
