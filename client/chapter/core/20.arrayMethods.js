/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray
// 배열인지 체크하는 함수
function isArray(data) {
  return Object.prototype.toString.call([]).slice(8, -1).toLowerCase() === 'array'
  /*
  1. Object.prototype.toString.call([])을 하면 [object Array] 문자열이 나옴
  2. .slice(8, -1)로 'Array' 부분만 잘라서 검사함
  */
}


// null인지 확인하는 함수
function isNull(data) {
  return Object.prototype.toString.call(null).slice(8, -1).toLowerCase() === 'null'
}


// 자료형 체크하는 함수로 따로 빼서 만들기
function typeOf(data) {
  return Object.prototype.toString.call(null).slice(8, -1).toLowerCase()
}

// arrow function
const typeOf2 = (data) => Object.prototype.toString.call(null).slice(8, -1).toLowerCase()

// arrow function
const isArray2 = (data) => typeOf(data) === 'array'
const isNull2 = (data) => typeOf(data) === 'null'
const isNumber2 = (data) => typeOf(data) === 'number'


/* 요소 순환 ---------------------------- */
const people = [
  {
    id: 0,
    name: '안재명',
    age: 25,
    job: '물음표살인마',
    imgSrc: 'https://randomuser.me/api/portraits/thumb/men/50.jpg',
    imgAlt: '대체 텍스트입니다.'
  },
  {
    id: 1,
    name: '황선우',
    age: 51,
    job: '요식업 사장님',
    imgSrc: 'https://randomuser.me/api/portraits/thumb/men/65.jpg',
    imgAlt: '대체 텍스트입니다.'
  },
  {
    id: 2,
    name: '유진',
    job: '디스코드 봇',
    age: 12,
    imgSrc: 'https://randomuser.me/api/portraits/thumb/men/75.jpg',
    imgAlt: '대체 텍스트입니다.'
  },
  {
    id: 3,
    name: '김한울',
    job: '비둘기',
    age: 39,
    imgSrc: 'https://randomuser.me/api/portraits/thumb/men/78.jpg',
    imgAlt: '대체 텍스트입니다.'
  }
]


// forEach
people.forEach(user => {
  console.log(user.job);
});


// html에 이벤트 넣기 - event delegation (이벤트 위임)
// const first = document.querySelector('.first');
// const second = document.querySelector('.second');
// const third = document.querySelector('.third');

// first.addEventListener('click', () => {
//   console.log('first를 클릭함');
// })

// second.addEventListener('click', () => {
//   console.log('second를 클릭함');
// })

// third.addEventListener('click', () => {
//   console.log('third를 클릭함');
// })


// 함수로 만들기
const span = document.querySelectorAll('span'); // 유사배열

span.forEach((tag) => {
  tag.addEventListener('click', function () {
    this.style.color = 'dodgerblue'
    // this를 쓰려면 일반 함수 사용(화살표 함수 X)
  })
})



/* 원형 파괴 ----------------------------- */
// push
// people.push('admin')

// pop
// people.pop('')

// unshift

// shift

// reverse
const arr = [...people];
arr.reverse();

// console.log(arr);

// splice (push + pop + splice)
// people.splice(0, 2, '안녕')

// sort (compare function이 필요함)
function compare(a, b) {
  if (a > b) return 1; // 첫 번째 값이 두 번째 값보다 큰 경우
  if (a == b) return 0; // 두 값이 같은 경우 
  if (a < b) return -1; // 첫 번째 값이 두 번째 값보다 작은 경우
}

// people.sort(compare);



/* 새로운 배열 반환(원본 보존) ------------------------ */
// concat

// toSpliced
const toSpliced = people.toSpliced(0, 2)

// toSorted
const toSorted = people.toSorted(compare)

// toReversed
const toReversed = people.toReversed();

// map
// 이름만 담은 배열 반환
const nameList = people.map((user) => {
  return user.name
})

// 화살표 함수
// const nameList = people.map(u => u.name)

// 현재 나이에서 + 2된 배열을 반환
// const age = people.map((user)=>{
//   return user.age + 2
// })

// 화살표 함수
const age = people.map(u => u.age + 2);


// html 만들기
const cardTag = people.map(({ name, age, job, imgSrc, imgAlt }) => {

  let template = /* html */`
    <li class="userCard">
      <div class="imageField">
        <img src="${imgSrc}" alt="${imgAlt}" />
      </div>
      <ul class="contents">
        <li> <span class="strong">이름</span> : ${name}</li>
        <li> <span class="strong">나이</span> : ${age}</li>
        <li> <span class="strong">직업</span> : ${job}</li>
      </ul>
    </li>
  `
  return template;
})

const ul = document.querySelector('ul');

cardTag.forEach(tag => ul.insertAdjacentHTML('beforeend', tag))
// 넣을 태그.insertAdjacentHTML('위치', 넣을 요소):



/* 요소 포함 여부 확인 ---------------------- */
// indexOf
// lastIndexOf
// includes



/* 요소 찾기 ------------------------------ */
// find: 단일 대상만 찾음
// - 중복 시 첫 번째 요소 반환
const 황 = people.find((itme) => {
  return itme.name === '황선우'
})

// console.log('황', 황)


// findIndex


/* 요소 걸러내기 --------------------------- */
// filter: 조건에 부합하는 모든 대상을 배열로 반환
// - find와 다른 점: 1. 복수 대상 반환 / 2. 배열로 반환
const filter = people.filter((itme) => {
  return itme.age > 20
})

// console.log('filter', ...filter) // 구조분해(...)로 각자 배열로 반환


/* 요소별 리듀서(reducer) 실행 -------------- */
// reduce
// const reduce = people.reduce((acc,cur)=>{
//   return acc + cur.age 
// },0)

const reduce = people.reduce((acc, cur) => acc + cur.age, 0)

const template = people.reduce((acc, cur) => {
  return acc + `<li class="userCard"> ${cur.name} : ${cur.age} </li>`
}, '')

ul.insertAdjacentHTML('beforeend', template)

// reduceRight


/* string ←→ array 변환 ------------------ */
const str = '유진 정민 현주 재명';

// split: 문자 -> 배열로 바꿔서 반환
const stringToArray = str.split(' ');

console.log('stringToArray', stringToArray);


// join: 배열 -> 문자로 바꿔서 반환
const arrayToString = stringToArray.join('-');

console.log('arrayToString', arrayToString);


//------------------------------------------------

// const user = {
//   grades:[1,2,3],
//   sayHi(){

//     this.grades.forEach(()=>{
//       this
//     })
//   }
// }


const products = [
  { name: '냉동 만두', price: 10000, brand: '비비고' },
  { name: '냉동 피자', price: 15000, brand: '오뚜기' },
  { name: '냉동 치킨 너겟', price: 12000, brand: '하림' },
  { name: '냉동 감자튀김', price: 8000, brand: '맥케인' },
  { name: '냉동 새우', price: 18000, brand: '곰곰' }
];


const forEach = (f, i) => {
  for (const a of i) f(a)
}

forEach((item) => {
  console.log(item);
}, [1, 2, 3])



const map = (f, i) => {
  let result = [];

  for (const a of i) {
    result.push(f(a))
  }

  return result;
}


const _filter = (f, i) => {
  let result = [];

  for (const a of i) {
    if (f(a)) result.push(a)
  }
  return result;
}

_filter(n => n > 3, [1, 2, 3, 4, 5])



const _reduce = (f, acc, i) => {

  if (!i) {
    i = acc;
    acc = i.shift()
    // i = acc[Symbol.iterator]();
    // acc = i.next().value
  }

  for (const a of i) {
    acc = f(acc, a);
  }

  return acc;
}


const add = (a, b) => a + b;

console.log(_reduce((t, p) => t + p.price, 0, products));

console.log(
  _reduce(
    add,
    map(p => p.price,
      _filter(p => p.price < 10000, products)),
  )
);
