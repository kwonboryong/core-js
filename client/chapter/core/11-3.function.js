/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 화살표 함수 (표현)식
//                 rest parameter
let calcAllMoney = (...rest) => {
  let total = 0;

  // for문
  // for (let i = 0; i < rest.length; i++) 
  //   total += rest[i];
  // }

  // for of문
  // for (let value of rest) {
  //   total += value;
  // }

  // forEach문
  // rest.forEach(item => {
  //   total += item;
  // });

  // 화살표 함수
  // rest.forEach(item => total += rest);

  // reduce()
  const result = rest.reduce(function (acc, cur) {
    return acc + cur
  }, 0)

  // reduce() 화살표 함수
  // const result = rest.reduce((acc, cur) => acc + cur, 0);

  return result;
}

const result = calcAllMoney(1000, 5000, 4500, 13000);

// console.log(result);


// 화살표 함수와 this
const Button = (text) => {
  this.content = text;
  // return text
}

// 일반 함수 호출
// const a = button('more');

// 생성자 호출 => 객체 리턴
// const b = new Button('more');


// this: 나를 호출한 대상을 가리킴
const user1 = {
  name: '권보령',
  sayHi: function () { // 일반 함수
    console.log(this); // 나를 호출한 대상이 user를 가리킴
  },
  sayHi2: () => { // 화살표 함수
    console.log(this);
  },
  sayHi3() { // concise method
    console.log(this);
  }
}

const user = {
  name: '권보령',
  total: 0,
  greades: [30, 40, 50],
  totalGrades() {
    function sayHi() {
      console.log(this);
    }

    // const sayHi = function() {
    //   console.log(this);
    // }

    this.totalGrades()

    sayHi() // window
  }
}
// totalGrades <- user의 메서드임. user가 호출
// sayHi <- user의 메서드가 아님. 
// totalGrades함수가 window한테 불러달라고 한거


/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
// let pow = (numeric, powerCount) => {
//   let result = 1;

//   for (let i = 0; i < powerCount; i++) {
//     result *= numeric
//   }

//   return result;
// }

// // 거듭제곱
// pow(2, 53);


// 2번째 방법
const pow = (numeric, powerCount) => {

  // 값을 비워두기 위해 fill(null)을 함
  // reduce를 통해 값을 축적 => 거듭제곱
  // fill을 사용해 요소를 채워줘야 하는게 그냥 array(20)을 하면 배열을 생성하긴 하는데 비어있는거고, 요소가 정의되지 않아서 reduce 메소드를 바로 사용할 수 없어서 null로 채워줌
  return Array(powerCount).fill(null).reduce((acc) => {
    return acc *= numeric
  }, 1)
}

// 줄인 버전
// const pow = (numeric,powerCount) => Array(powerCount).fill(null).reduce(acc => acc *= numeric,1)



// repeat(text: string, repeatCount: number): string;
// let repeat = (text, repeatCount) => {
//   let result = '';

//   for (let i = 0; i < repeatCount; i++) {
//     result += text;
//   }

//   return result;
// }

// repeat('안녕~', 3); // 안녕안녕안녕

// 2번째 방법
// const repeat = (text, repeatCount) => {

//   Array(repeatCount).fill(null).reduce((acc) => {
//     return acc + text
//   }, '')
// }

// 줄인 버전
// const repeat = (text,repeatCount)=> Array(repeatCount).fill(null).reduce((acc)=> acc + text,'')

