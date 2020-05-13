
// 공통으로 사용하는 기능을 모아 View라는 모델로 만들었다. 
const tag = '[View]'

// ES6의 모듈패턴을 사용하여 export default로 객체를 익스포트한다. 
export default {
  init(el) {
    if (!el) throw el
    this.el = el
    return this
  },

  // on ;이벤트와 헨들러를 인자로 받아 
  // 특정 이벤트가 발생했을때 핸들러가 시행되도록한다. 
  on(event, handler) {
    this.el.addEventListener(event, handler)
    return this
  },

  // 스스로 이벤트를 방출
  // CustomEvent(이벤트이름, {detail: 데이터객체})
  emit(event, data) {
    const evt = new CustomEvent(event, { detail: data })
    this.el.dispatchEvent(evt) // dispatchEvent(커스텀이벤트객체)
    return this
  },

  hide() {
    this.el.style.display = 'none'
    return this
  },

  show() {
    this.el.style.display = ''
    return this
  }
} 