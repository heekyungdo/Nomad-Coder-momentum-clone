// const loginForm = document.getElementById("login-form");

const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

// 클릭 이벤트는 loginButton과 연결되어 있어야돼
// loginButton에 대한 click을 감지
function onLoginBtnClick() {
  const username = loginInput.value;
  console.log(username);
}

loginButton.addEventListener("cilck", onLoginBtnClick);
