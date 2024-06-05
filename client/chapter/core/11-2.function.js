/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */

function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function () {

  let total = 0;

  // 유사배열: 함수 안에서만 접근 가능한 인수들의 집합 객체로서 배열과 유사한 변수(배열과 유사하게 생긴 객체)
  // = arguments

  // for문
  // for (let i = 0; i < arguments.length; i++) {
  //   total = total + arguments[i];
  // }

  // for of문
  // for (let value of arguments) {
  //   total += value;
  // }

  // 유사배열을 배열로 만들어서 반복문 수행하기(arguments => array)
  const arr = [...arguments];
  // const arr = Array.from(arguments);

  // forEach문
  // arr.forEach(item => {
  //   total += item;
  // });


  // reduce 사용
  // const result = arr.reduce(function(arr, cur){
  //   return arr + cur
  // }, 0);

  // arrow 함수
  // const result = arr.reduce((acc, cur) => acc + cur, 0);

  // 배열의 능력을 일회성으로 빌려쓴거
  // Array.prototype.forEach.call(arguments, function (item) {
  //   total += item
  // })

  // 태생을 배열로 바꾸기
  arguments.__proto__ = Array.prototype
  // console.log(arguments);

  return total;
};

const result = calculateTotal(1000, 5000, 2500, 4000, 2300);
// console.log(result);


// reduce 예시
const people = [
  {
    nickName: 'tiger',
    age: 40
  },
  {
    nickName: 'beom',
    age: 45
  },
  {
    nickName: 'seon',
    age: 20
  }
]

const template = people.reduce(function (htmlCode, cur) {
  return htmlCode + `<div>${cur.nickName} : ${cur.age}</div>`
}, '')

// console.log(template);


// map--------------------------------------------
const arr = [10, 100, 1000];

const mapValue = arr.map(function (item, index) {
  return item * 2
})

// console.log(mapValue);


// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function () { };


// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello() {

};


// 콜백 함수 (표현)식
let cb = function (isActive, success, fail) {
  if (isActive) {
    success()

  } else {
    fail()
  }
};

cb(false,
  function () {
    console.log('성공');
  },
  function () {
    console.log('실패');
  }
)


// 예시2
function movePage(url, success, fail) {
  if (url === 'https://www.naver.com') {
    success(url)
  } else {
    fail()
  }
}

movePage(
  'https://www.naver.com',
  function (site) {
    console.log(`현재 입력하신 url은 ${site}입니다. 3초 뒤 해당 사이트로 이동합니다.`);
  },
  function () {
    console.log('잘못된 url입니다.');
  }
)


// 고차함수 (higher-order function)
function map(arr, func) {

  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(func(arr[i] * 3))
  }

  return result
}

map([1, 2, 3], function (item) {
  return item + ''
})


// 함수 선언문 vs. 함수 (표현)식



// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
// : 함수가 선언됨과 동시에 실행되는 것
let IIFE;

const MASTER = (function (tiger){

  tiger.alert()
  // 인자로 받은 window를 tiger로 쓸 수 있음

  let uuid = 'asdfg'
  // uuid라는 변수가 보호됨

  return {
    getKey() {
      return uuid
    },
    setKey(value) {
      uuid = value
    }
  }
})(window)

// uuid = 'asdfgjdjd'
// uuid 변수 수정 불가능

// console.log();
