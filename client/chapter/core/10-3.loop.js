/* ------------ */
/* For Loop     */
/* ------------ */

// 2 ~ 10까지의 짝수 출력하기
for (let i = 0; i < 11; i++) {

  if (i % 2 === 0) {
    console.log(i);
  }
}

let j = 0;
while (j <= 10) {
  j++
  if (j % 2 === 0) {
    console.log(j);
  }
}


const frontEndDev = 'HTML CSS SVG JavaScript jQuery React Redux'.split(' ');
// .split(' ') : 문자열에서 ( )를 기준으로 쪼갠 후 배열로 반환

let i = 0;
let l = frontEndDev.length;

while (i < l) {
  // console.log(frontEndDev[i]);
  i += 1;
}


// while 문 → for 문 (순환)
// - 실행 흐름
// - 순환 중단 또는 이어서 순환
//   - 조건이 맞을 경우, 이어서(continue) 순환
for (let i = 0; i < l; i++) {
  let value = frontEndDev[i];
  let lower = value.toLowerCase();

  if (lower.includes('svg') || lower.includes('jquery')) continue;
  //   - 조건: SVG, jQuery는 출력하지 마세요.


  if (lower.includes('jquery')) break;
  //   - 조건: JavaScript 까지만 출력하세요.

  // console.log(value);
}


//   - 무한 루프 (브레이크)
//   - for 문 (역순환)
for (let i = 0; i < l; i++) {
  let arr = [...frontEndDev]
  // pop/shift는 요소를 제거하는거라 배열이 사라지기 때문에 배열을 보존

  console.log(frontEndDev.pop());
  // pop(): 마지막부터 제거 (역순환)
  // shift(): 첫 번째부터 제거 (순환)
}

// for(let i = l, subject; subject = frontEndDev[--i];){
//   console.log(subject);
// }
