
/* normal function */
// function earth(){

//   let water = true;
//   let gravity = 10;

//   return function(value){
//     gravity = value;

//     return [water,gravity]
//   }
// }


/* arrow function */
const earth = () => {

  let water = true;
  let gravity = 10;

  return (value) => {
    gravity = value;

    return [water, gravity]
  }
}

const ufo = earth()

ufo(-10)


//-----------------------------------------------------

const button = document.querySelector('button');

/* normal function */
// function handleClick(){

//   let isClicked = false;

//   function inner() {
//     if(!isClicked){
//       document.body.style.background = 'orange'

//     }else{
//       document.body.style.background = 'white'
//     }

//     isClicked = !isClicked;
//   }

//   return inner;
// }


// IIFE (즉시 실행 함수)
/* arrow function */
const handleClick = (() => {

  let isClicked = false;

  // 클로저 (변수 보호)
  return () => {
    if (!isClicked) {
      document.body.style.background = 'orange'

    } else {
      document.body.style.background = 'white'
    }

    isClicked = !isClicked;
  }
})()
// 즉시 실행 함수 사용 
// -> 최소 1회 시행 => 안쪽 함수가 실행됨 => hadleClick만 실행된 상태로 이제 클릭할 때마다 내부 함수가 실행

button.addEventListener('click', handleClick)

//-----------------------------------------------------

function state(init) {
  let value = init; // value값 보호

  function read() {
    return value;
  }

  function write(newValue) {
    value = newValue;
  }

  return [read, write];
}


// value에 접근할 수 있는 함수
// const getter = result[0];
// const setter = result[1];

// 구조분해할당
// const [getNumber, setNumber] = useState(10);

