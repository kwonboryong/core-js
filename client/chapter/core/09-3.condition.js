/* ---------------- */
/* Switch           */
/* ---------------- */

// let a = 10;

// switch (a) {
//   case 10:
//     console.log('10입니다');
//     break;
//   case 10:
//     console.log('10입니다');
//     break;
//   case 10:
//     console.log('10입니다');
//     break;
// }

const MORNING = '아침',
  LUNCH = '점심',
  DINNER = '저녁',
  NIGHT = '밤',
  LATE_NIGHT = '심야',
  DAWN = '새벽';

let thisTime;


/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'

switch (thisTime) {
  case '아침':
    console.log('뉴스 기사 글을 읽는다.');
    break;

  case '점심':
    console.log('자주 가는 식당에 가서 식사를 한다.');
    break;

  case '저녁':
    console.log('동네 한바퀴를 조깅한다.');
    break;

  case '밤':
    console.log('친구에게 전화를 걸어 수다를 떤다.');
    break;

  case '심야':
  case '새벽':
    console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
    break;
}


/* switch문 → if문 변환 --------------------------------------------------- */

if (thisTime == '아침') {
  console.log('뉴스 기사 글을 읽는다.');

} else if (thisTime == '점심') {
  console.log('자주 가는 식당에 가서 식사를 한다.');

} else if (thisTime == '저녁') {
  console.log('동네 한바퀴를 조깅한다.');

} else if (thisTime == '밤') {
  console.log('친구에게 전화를 걸어 수다를 떤다.');

} else if (thisTime == '심야') {
  console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
}

// --------------------------------------------------

// 랜덤값
function getRandom(n) {
  const num = Math.floor(Math.random() * n);
  return num
}

// 출력
function getDay(num) {
  const value = getRandom(num)

  console.log(value);

  switch (value) {
    case 0: return '일';
    case 1: return '월';
    case 2: return '화';
    case 3: return '수';
    case 4: return '목';
    case 5: return '금';
    case 6: return '토';
  }
}

getDay(7);


function weekend() {
  // getDay 실행해서 요일 받아옴 (일 ~ 월)
  const day = getDay(getRandom(7));

  // 해당 요일을 가지고 토, 일 => 주말
  // if (day === '토' || day === '일') {
  //   return '주말입니다.';
  // } else {
  //   return '평일입니다.';
  // }


  // 3항식 버전
  const today = day.includes('토') ? '토요일' : day.includes('일') ? '일요일' : '평일'

  return today;
}

// 값만 나오고 끝난 상태라서 콘솔에 안 나옴
weekend();

console.log(weekend());
