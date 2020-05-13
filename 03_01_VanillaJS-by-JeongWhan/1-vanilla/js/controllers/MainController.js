import FormView from '../views/FormView.js'

// 디버깅을 위함 
const tag = '[MainController]'

// app.js 에서 호출될 예정
export default {
  init() {
    console.log(tag, 'init()')
    FormView.setup(document.querySelector('form'))
  }
} 