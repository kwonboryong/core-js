import { getNode } from '../dom/getNode.js';
import { isNumber, isObject } from '../utils/type.js';

function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

const first = getNode('.first');
const second = getNode('.second');

// 애니메이션
// delay(()=>{ 
//   first.style.top = '-100px';
//   second.style.top = '100px';
//   delay(()=>{
//     first.style.transform = 'rotate(360deg)';
//     second.style.transform = 'rotate(-360deg)';
//     delay(()=>{
//       first.style.top = '0px';
//       second.style.top = '0px';
//     })
//   })
//  })


//-------------- promise ---------------
const shouldRejected = false;

const p = new Promise((성공, 실패) => {
  if (!shouldRejected) {
    성공('성공!!');

  } else {
    실패('실패!');
  }
});


function delayPP(timeout = 1000) {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldRejected) {
        resolve('성공!!');
      }

      else {
        reject('실패!!');
      }
    }, timeout);
  })
}

// delayPP()
//   .then((res) => {
//     console.log(res);
//     first.style.top = '-100px';
//     second.style.top = '100px';

//     return delayP();
//   })

//   .then((res) => {
//     console.log(res);
//     first.style.transform = 'rotate(360deg)';
//     second.style.transform = 'rotate(-360deg)';

//     return delayP();
//   })

//   .then((res) => {
//     first.style.top = '0px';
//     second.style.top = '0px';
//     console.log(res);
//   });


//----------------- 객체 합성 ---------------------
const defaultOptions = {
  shouldRejected: false,
  data: '성공',
  errorMessage: '알 수 없는 오류',
  timeout: 1000
}

function delayP(options) {

  // 기본값 복사(timeout을 따로 쓰려고 구조 분해 할당 해둠)
  let config = { ...defaultOptions }

  if (isNumber(options)) {
    config.timeout = options;
  }

  if (isObject(options)) {
    // 합성
    config = { ...defaultOptions, ...options };
  }

  let { shouldRejected, data, errorMessage, timeout } = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldRejected) {
        resolve(data);
      } else {
        reject({ message: errorMessage });
      }
    }, timeout);
  });
}

delayP(3000);

// 함수 호출 인자로 객체 전달
// delayP({
//   shouldRejected: false,
//   data: '성공',
//   errorMessage: '알 수 없는 오류',
//   timeout: 1000
// })

