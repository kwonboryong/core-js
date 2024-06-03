/* ---------------------------- */
/* Nullish Coalescing Operator  */
/* ---------------------------- */

let emailAddress;
let receivedEmailAddress;

// if 버전
if (emailAddress === undefined || emailAddress === null) {
  // 값이 없으면 'user@company.io' 할당
  receivedEmailAddress = 'user@company.io';
} else {
  // 값이 있으면 emailAddress 할당
  receivedEmailAddress = emailAddress;
}


// 3항 연산자(ternary) 버전
receivedEmailAddress = (emailAddress === undefined || emailAddress === null) ? 'user@company.io' : emailAddress;


// nullish 병합 연산자 버전
receivedEmailAddress = emailAddress ?? 'user@company.io';
receivedEmailAddress = emailAddress || 'user@company.io';

console.log(receivedEmailAddress);


/* ?? vs. || -------------------------------------------------- */
// || → 첫번째 Truthy 값을 반환
// ?? → 첫번째 정의된(defined) 값을 반환

const WIDTH = '10px';
const isActive = false;

// console.log(0 ?? WIDTH); // 0
// console.log(0 || WIDTH); // 10px

// a ||= b : a가 false일 때 b값을 a에 할당
// a &&= b : a가 true일 때 b값을 a에 할당
// a ??= b : a가 undefined, null일 때 b값을 a에 할당
