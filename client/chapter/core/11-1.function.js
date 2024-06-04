/*----------------------------------------------------*/
/* Functions → Declaration */
/*----------------------------------------------------*/

// console.log('총 합 = ', 10000 + 8900 + 1360 + 2100);
// console.log('총 합 = ', 21500 + 3200 + 9800 + 4700);
// console.log('총 합 = ', 3800 + 15200 - 500 + 80200);
// console.log('총 합 = ', 560 + 5000 + 27100 + 10200);
// console.log('총 합 = ', 9000 - 2500 + 5000 + 11900);

function getRandomValue() {
  return Math.random() > 0.5 ? 1 : 0;
}

// 함수 선언        매개변수            default parameter
function calcPrice(
  priceA, 
  priceB, 
  priceC = getRandomValue(), 
  priceD = getRandomValue()) {
  // validation (확인 작업)
  // 1. if (priceC === undefined) {
  //   priceC = 0;
  // }

  // 2. if(!priceC) priceC = 0;

  // 3. priceC ||= 0;

  // 4. priceC ??= 0;
  
  console.log(priceA + priceB + priceC + priceD);
}

// 함수 호출
calcPrice(1000, 3000); // 인수

// 함수 값 반환

// 매개 변수

// 매개 변수 (parameter) vs. 전달 인수 (argument)

// 외부(전역 포함), 지역 변수

// 매개 변수 기본 값

// 좋은 함수 작성 여건
/* 
1. 함수 이름 잘 짓기 (동사로 짓기)
2. 전역 오염 안 시키기
3. 하나의 기능만 수행하기
4. 재사용성이 좋아야 한다. */


/* 다음 함수를 작성해봅니다. -------------------------------------------------- */
console.clear()

// rem(pxValue: number|string, base: number):string;
rem('25px', 16) // '1.5625rem'

function rem(pxValue = 0, base = 16) {

  if (!pxValue) {
    throw new Error('rem 함수의 첫 번째 인수는 필수 입력 값 입니다.')
  }

  if (typeof pxValue === 'string') {
    pxValue = parseInt(pxValue, 10)
  }

  if (typeof base === 'string') {
    base = parseInt(base, 10)
  }

  return (pxValue / base) + 'rem'
}

console.log(rem(20));
console.log(rem('20px'));


// 반드시 === 이후의 값을 반환하지 않으면 에러 뜨도록 확인
console.assert(rem(20) === '1.25rem')
console.assert(rem('25px') === '1.5625rem')
console.assert(rem('30px',10) === '3rem')

// throw new Error('에러 문구'): 에러 발생시키기



//  HTML의 style 변경하기
// setStyle('.first', 'color', 'blue')

// 1번째 방법
function setStyle (className, color) {
  document.querySelector('.' + className).style.color = color;
}

setStyle('second', 'pink');


// 2번째 방법
const first = document.querySelector('.first');

function setStyle2 (node, prop, value) {
  if (typeof node === 'string') node = document.querySelector(node);
  
  if (typeof prop !== 'string') throw new Error('setStyle 함수의 두 번째 인수는 문자 타입이어야 한다.');

  if (!value) throw new Error('setStyle 함수의 세 번째 인수는 필수값 입니다.');

  node.style[prop] = value
}

setStyle2(first, 'color', 'red')


// node의 값을 'h1'으로 받았을 경우
// node가 없거나 document.ELEMENT_NODE가 아닐 경우
// prop의 값이 string이 아닐 경우
// prop의 값이 sytle 속성이 아닐 경우
// value의 값이 number가 아닌 경우



// 클릭 이벤트를 이용한 h1의 폰트 크기를 증가시키는 함수와 감소시키는 함수 만들기

// 1. h1,plus,minus 요소를 변수로 지정한다.
// 2. h1의 폰트 사이즈를 가져온다.
// 3. 증가함수와 감소함수를 만든다.
// 4. 클릭 이벤트와 바인딩한다.