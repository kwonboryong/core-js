
/* ------------- GSAP 버전 -------------*/
const aList = document.querySelectorAll('nav a');

/* global gsap */
aList.forEach((a) => {

  const target = a.lastElementChild;

  const tl = gsap.timeline({ paused: true })
    .to(target, { height: 100, ease: 'power3.inOut' })

  a.addEventListener('mouseenter', () => tl.play())
  a.addEventListener('mouseleave', () => tl.reverse())
})



/* ------------- 기본 버전 -------------*/
/*
const aList = document.querySelectorAll('nav a');
const depthList = document.querySelectorAll('.depth');
const header = document.querySelector('#header');

// 모든 depth의 높이를 0으로 설정하는 함수
const h = t => t.style.height = 0;


aList.forEach((a) => {
  a.addEventListener('mouseenter', () => {

    const target = a.lastElementChild;

    // 모든 depth의 높이를 0으로 설정
    depthList.forEach(h);

    // 내가 선택한 메뉴만 depth 높이 조절하기
    target.style.height = '100px';
  })
})


header.addEventListener('mouseleave', () => {
  depthList.forEach(h)
})
*/
