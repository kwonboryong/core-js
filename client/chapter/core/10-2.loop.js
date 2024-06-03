/* -------------------- */
/* Do While Loop        */
/* -------------------- */

// let i = 0;

// do{
//   console.log(i);

//   if(i === 3){
//     console.log('3번 입니다.');
//   }

//   i++

// } while(i < 5)


// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// - 사용자로부터 요청된 횟수가 0보다 작을 경우, 
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단

// let result = prompt('몇 회 순환할까요?');

// do {
//   console.log('최초 실행된 메시지 입니다.');

//   if (result < 0) {
//     break;
//   }
//   result--;

// } while (result >= 0);


// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정

// let count = 0;

// do {
//   console.log(count++);
// } while (result--);


const first = document.querySelector('.first');
// first의 다음 요소 선택하기 => .second
// nextSibling: 해당 class의 다음 요소 선택하기
// console.log(first.nextSibling.nextSibling);

// do {
//   first = first.nextSibling;

// } while (first.nodeType !== document.ELEMENT_NODE);
// // document.ELEMENT_NODE => 1


// 다음 요소를 찾는 함수
function next(node) {

  // node가 문자일때만 실행
  if (typeof node === 'string') {
    node = document.querySelector(node);
  }

  do {
    node = node.nextSibling;

  } while (node.nodeType !== 1);

  return node
}

const second = next('.first'); // .second


// 이전 요소를 찾는 함수
function prev(node) {

  // node가 문자일때만 실행
  if (typeof node === 'string') {
    node = document.querySelector(node);
  }

  do {
    node = node.previousSibling;

  } while (node.nodeType !== 1)

  return node
}

const prevoius = prev(second) // .first
