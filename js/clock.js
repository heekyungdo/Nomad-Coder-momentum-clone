const clock = document.querySelector("h2#clock");

function sayHello() {
  console.log("hello");
}

// setInterval은 2개의 argument를 받는다.
// 첫번째 argument는 내가 실행하고자 하는 function.
// 두번째 argument는 호출되는 function 간격을 몇 ms(milliseconds)로 할지 적어.

// sayHello 함수는 5초(5000ms)마다 호출
setInterval(sayHello, 5000);
