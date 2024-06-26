/* ---------------------------- */
/* Event bubbling & capturing   */
/* ---------------------------- */

/* 버블링 ---------------------------------------------*/
const section = getNode('section');
const article = getNode('article');
const p = getNode('p');

section.addEventListener('click', (e) => {
  console.log('e.target : ', e.target);
  console.log('e.currentarget : ', e.currentTarget)
  console.log('this', this)

  // 콘솔에 색상 넣기
  console.log('%c section', 'color:orange');
})

section.addEventListener('click', (e) => {
  console.log('%c article', 'color:hotpink');
})

section.addEventListener('click', (e) => {
  console.log('%c p', 'color:dodgerblue');
})


/* 캡처링 ---------------------------------------------*/
