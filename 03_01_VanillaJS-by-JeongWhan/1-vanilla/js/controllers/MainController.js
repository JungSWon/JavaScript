import FormView from '../views/FormView.js'

// 디버깅을 위함 
const tag = '[MainController]'

// app.js 에서 호출될 예정
export default {
  init() {
    console.log(tag, 'init()')
    FormView.setup(document.querySelector('form'))
      // .on('@submit', function(e){
      //   console.log(e.detail.input,'?')
      //   this.onSubmit(e.detail.input)})
      .on('@submit', e => this.onSubmit(e.detail.input))
      // Formview에 .on()메소드를 chaining했다. 
      // 그게 가능하려면 FormView.setup에서 return this 해야한다
  },
  onSubmit(input) {
    console.log(tag,'onSubmit()',input)
  }
} 