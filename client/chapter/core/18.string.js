/* -------------------- */
/* String Type          */
/* -------------------- */
// enumerable // 열거 가능한
// iterable // 반복 가능한
// immutable // 불변의
// mutable // 변경 가능한
// mutant // 돌연변이


let message = 'Less is more.';


// length 프로퍼티 (공백 포함)
let stringTotalLength = message.length;

console.log(stringTotalLength);


// 특정 인덱스의 글자 추출 (공백 미포함)
let extractCharacter = message[5];

console.log('extractCharacter : ', extractCharacter)


// const a = {...immutable} 

// 문자열 중간 글자를 바꾸는 건 불가능 
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter = 'P' + message.slice(1);

console.log(message);


// 부분 문자열 추출
let slice = message.slice(4, -1);
console.log('slice : ', slice)

let subString = message.substring(1, 5);
console.log('subString : ', subString)

// let subStr = message.substr();



// 문자열 포함 여부 확인
let indexOf = message.indexOf('is');
console.log('indexOf : ', indexOf)


function checkBrowser() {

  const agent = window.navigator.userAgent.toLowerCase();
  let browserName;

  switch (true) {
    case agent.indexOf('edg') > -1:
      browserName = 'MS Edge'
      break;
    case agent.indexOf('chrome') > -1 && !!window.chrome:
      browserName = 'Chrome'
      break;
    case agent.indexOf('safari') > -1:
      browserName = 'Safari'
      break;
    case agent.indexOf('firefox') > -1:
      browserName = 'Firefox'
      break;
    case agent.indexOf('trident') > -1:
      browserName = 'IE'
      break;
    default:
      browserName = '무슨 브라우저 쓰세요..?'
  }

  return browserName
}

checkBrowser() // 'Chrome'




// <string 메서드>
// let message = 'Less is more.';

let lastIndexOf = message.lastIndexOf('s');
console.log('lastIndexOf', lastIndexOf)


let includes = message.includes('Less')
console.log('includes', includes) // true


let startsWith = message.startsWith('less')
console.log('startsWith', startsWith) // false


let endsWith = message.endsWith('more')
console.log('endsWith', endsWith) // false



// <공백 잘라내기>
let str = '         a      b    c          d           ';

// 시작 부분 공백 제거
let trimStart = str.trimStart();
console.log('trimStart', trimStart)

// 끝 부분 공백 제거
let trimEnd = str.trimEnd();
console.log('trimEnd', trimEnd)

// 양쪽 공백 제거
let trim = str.trim();
console.log('trim', trim)

// 모든 공백 제거 (중간 공백)
// - 1번째 방법: replaceAll
const replaceAll = str.replaceAll(' ', '');
console.log('replaceAll', replaceAll);

// - 2번째 방법: 정규표현식
const replace = str.replace(/\s*/g, '');
console.log('replace', replace);

// - 3번째 방법: 함수
const trimText = (str) => str.replace(/\s*/g, '');
console.log(trimText(str));



// <텍스트 반복>
let repeat = message.repeat(3);
console.log('repeat', repeat)


// <대소문자 변환>
let toLowerCase = message.toLowerCase();
console.log('toLowerCase', toLowerCase)


let toUpperCase = message.toUpperCase();
console.log('toUpperCase', toUpperCase)



// <텍스트 이름 변환 유틸리티 함수>
// 카멜 케이스
function toCamelCase(string) {
  return string.replace(/(\s|-|_)+./g, ($1) => $1.trim().replace(/(-|_)+/, '').toUpperCase())
}

console.log('toCamelCase', toCamelCase(message))


// 파스칼 케이스
function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
}

console.log('toPascalCase', toPascalCase(message))
