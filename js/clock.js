const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  // getHours,getMinutes.getSeconds는 number라서 문자로 바꿔준다.
  // "1".padStart(2,"0") -> string의 길이를 2로 만드는데, 그 string의 길이가 2가 아니라면 앞쪽에 "0"을 추가한다.
  // 그럼 결과는 01
  const hours = String(date.getHours()).padStart(2, "0");
  const mins = String(date.getMinutes()).padStart(2, "0");
  const sec = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${mins}:${sec}`;
}

// setInterval은 2개의 argument를 받는다.
// 첫번째 argument는 내가 실행하고자 하는 function 넣어.
// 두번째 argument는 호출되는 function 간격을 몇 ms(milliseconds)로 할지 적어.
// sayHello 함수는 5초(5000ms)마다 호출
// setInterval(sayHello, 5000);

// setTimeout은 2개의 argument를 받는다.
// 첫번째 argument는 내가 실행하고자 하는 function 넣어.
// 두번째 argument는 얼마나 기다릴지 ms 단위로 넣어.
// sayHello 함수는 5초(5000ms)후에 호출
// setTimeout(sayHello, 5000);

getClock();
setInterval(getClock, 1000);
