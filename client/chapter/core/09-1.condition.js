/* ---------------- */
/* Condition        */
/* ---------------- */

// const result = prompt("자바스크립트의 '공식'이름은 무엇일까요?");

// if (result === "ECMAScript") {
//   alert('정답입니다!');
// } else {
//   alert('모르셨나요? 정답은 ECMAScript입니다!');
// }

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?

// if 문(statement)
// else 절(clause)
// else if 복수 조건 처리
function watchingMovie() {
  let didWatchMovie = confirm('그 영화 봤니?');

  if (didWatchMovie) {
    alert('영화 어땠니?');
  } else {
    let goingToWatchMovie = confirm('그 영화 볼거니?');

    if (goingToWatchMovie) {
      alert('같이 보자');
    } else {
      alert('왜 안보니?');
    }
  }
}


// 조건부 연산자
let didWatchMovie = 'no';
let goingToWatchMovie = 'yes';

const result = didWatchMovie === 'yes' ? '어땠어?' : '같이 볼래?';


function render(node,isActive){
  
  let template = `
    <div>${isActive ? '안녕~~!!' : '잘가~~!!'}</div>
  `
  node.insertAdjacentHTML('beforeend',template);
}

// 멀티 조건부 연산자 식
