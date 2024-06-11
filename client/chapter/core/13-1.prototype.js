/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우

const animal = {
  legs: 4,
  tail: true,
  stomach: [],
  set eat(food) { //setter function
    this.stomach.push(food);
  },
  get eat() { // getter function
    return this.stomach
  }
}

// animal.setEat('고기')

// 함수 실행
animal.eat = '고기' // setter
animal.eat // getter

// set은 매개변수 필요, get은 return 필요


const tiger = {
  pattern: '호랑이 무늬',
  hunt(target) {
    this.pey = target;
    return `${target}에게 조용히 접근한다.`
  },
  __proto__: animal
}


const 백두산호랑이 = {
  color: 'white',
  name: '백돌이',
  __proto__: tiger
}

// 백두산호랑이.pattern
// 백두산호랑이.eat = '사슴'
// 백두산호랑이.eat


const 한라산호랑이 = {
  color: 'orange',
  name: '한돌이',
  __proto__: tiger

}


// 생성자 함수를 사용해서 객체 만들기 ---------------
// - 객체를 대량 생산

/* 함수 만드는 방법
1. 리터럴 방식
const animal = {}
- [[prototype]] => Object
-- 일일히 __prototype__을 지정하지 해줘야 함


2. 생성자 함수 
const animal = new animal()
- [[prototype]] => 무조건 Object가 아닐 수 있음
-- new Animal의 프로토타입이 누구로부터(어떻게) 설정됐는지에 따라 Object의 prototype이 설정됨*** 
-- 함수가 가지고 있는 일반 프로퍼티인 prototype이 상속된다는 거
-- 일일히 __prototype__을 지정하지 않아도 됨

[[Prototype]] => 접근 불가능
.prototype => 접근 가능

Rabbit.prototype = animal을 설정하면
new Rabbit()으로 생성된 인스턴스의 [[Prototype]] 안에 animal의 프로퍼티들이 내장된다

프로토타입의 프로퍼티: 생성자 함수 안에서 정의할 수 있음
constructor: 생성된 대상 (누구를 통해 생성됐는지)
ex. rabbit.constructor

아무것도 설정되지 않았을 때는 constructor와 프로토타입의 프로퍼티가 같음?
*/

function Animal() {
  this.leg = 4;
  this.tail = true;
  this.stomach = [],
    this.getEat = function () {
      return this.stomach
    }
  this.setEat = function (food) {
    this.stomach.push(food)
  }
}

const a1 = new Animal();


function Tiger(name) {
  this.name = name;
  this.pattern = '호랑이 무늬'
  this.hunt = function (target) {
    return `${target}에게 조용히 접근한다.`
  }
}

Tiger.prototype = a1; // 프로토타입 연결하기 -> 객체(a1)를 넣어줘야 함 (함수(Animal) 아님!!)
const 금강산호랑이 = new Tiger('금순이');
// 금강산호랑이.legs // 나옴


const arr = [1, 2, 3, 4];

function sum(a, b, c) {
  console.log(this);
  return a + b + c
}

sum.call('hello', 1, 2, 3) // this를 전달함 인수를 개별로 받음 => 함수 실행 o
sum.apply('hello', 1, 2, 3) // this를 전달함 인수를 배열로 받음 => 함수 실행 o

const b = sum.bind('hello', 1, 2, 3); // this를 전달함 인수를 개별로 받음 => 함수 실행 안함 



