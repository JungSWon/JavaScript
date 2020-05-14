import View from './View.js'

// 디버깅용
const tag = '[formView]'

const FormView = Object.create(View)

// setup 메소드 만들기 : html의 el을 받아서 내부적으로 속성을 갖도록 함 
FormView.setup = function(el){
  this.init(el) // /View.js에서 View.init(el) 함수를 만들어 놨다
  this.inputEl = el.querySelector('[type=text]') // el 찾아서 정의  
  this.resetEl = el.querySelector('[type=reset]')  
  this.showResetBtn(false) // resetEl을 숨김 처리하기 위한 함수 실행: 숨길거니까 인자는 false
  this.bindEvents()
  return this 
  }

  // resetEl을 숨김 처리하기 위한 함수 생성
  // show라는 불리언값(디폴트 true)를 인자로 받는다. 
  FormView.showResetBtn = function(show = true){
    this.resetEl.style.display = show ? 'block' :'none'
  }

  FormView.bindEvents = function(){
    this.inputEl.addEventListener('keyup', e => this.onKeyup(e))
  }
  
  FormView.onKeyup = function (e) {
    const enter = 13
    this.showResetBtn(this.inputEl.value.length) // length가 있을 경우에는 true로 인자 넘겨질 예정 
    if (e.keyCode !== enter) return
    // FormView 는 검색결과를 보여주지 않아도 된다. 
    this.emit('@submit', { input: this.inputEl.value })
    // MainController에게 검색어를 주면 
    // MainController는 검색어를 ResultView로 전달해줄 예정 
    // 검색결과는 ResultView가 그리는 것
  }

// FormView를 컨트롤러에서 쓰기 위해 익스포트 
  //MainController 에서 사용할 예정  
export default FormView 