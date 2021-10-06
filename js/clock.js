const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
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
