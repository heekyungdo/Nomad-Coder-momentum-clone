const images = [
  "greece.jpg",
  "hawaii.jpg",
  "hawaii2.jpg",
  "hawaii3.jpg",
  "uluru.jpg",
  "paris.jpg",
];

// array에 5개가 있으면 random 숫자가 4까지만 나와도 돼. 왜냐면 0부터 시작하니까
// console.log(Math.floor(Math.random() * images.length));
const chosenImg = images[Math.floor(Math.random() * images.length)];
// console.log(img);

// 자바스크립트에서 html element 생성
const bgImg = document.createElement("img");
// bgImg.src=`폴더명/${}`;
// bgImg.src는 html에 <img src="">와 같은 것
bgImg.src = `img/${chosenImg}`;
// console.log(bgImg);

// appendChild()는 body에 html을 추가하는 것
// bgImg를 body에 append 시킴
// appendChild는 가장 뒤에, prepend는 가장 위에 오게 한다.
// document.body.appendChild(bgImg);
document.body.appendChild(bgImg);
