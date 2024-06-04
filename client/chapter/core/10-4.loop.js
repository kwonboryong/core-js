/* ---------------- */
/* For In Loop      */
/* ---------------- */


const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2023,
  hasOwnProperty() {
    return '에휴'
  }
};


// 일부러 훼손시킴
Object.prototype.nickname = '호랑이';


// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?
// console.log('nickname' in javaScript);
// in문
// key in object
// - key값이 object 안에 있는지 확인 (객체 안에 해당 키가 있는지 확인)


// 객체 자신의 속성인지 확인하는 방법
// - "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?
// console.log(javaScript.hasOwnProperty('toString'));

// 메서드 빌려쓰기
// console.log(Object.prototype.hasOwnProperty.call(javaScript, 'key'));


// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?

for (let key in javaScript) {

  if (Object.prototype.hasOwnProperty.call(javaScript, key)) {
    console.log(key);
  }
}


/* 프로토 타입에 메서드를 추가한건데 javaScript에서 nickName이 조회가 되고 다른 메서드는 조회되지 않는 이유
enumerable: 열거 가능한
= 열거 가능한 속성과 아닌 속성이 나눠져있기 때문

- 옵션들을 사용하면 조회가 가능하게 만들 수 있음 */
// const obj = {}

// obj.nickName = 'tiger'

// // 속성 1개 정의
// Object.defineProperty(obj, 'age', {
//   value: 30,
//   enumerable: true,
//   writable: false,
//   configurable: true
// })

// // 속성 여러 개 정의
// Object.defineProperties(obj, {
//   age: {
//     value: 30,
//     enumerable: true,
//     writable: true
//   }
// })


const tens = [10, 100, 1000, 10_000];

for (let key in tens) {
  console.log(tens[key]);
}
