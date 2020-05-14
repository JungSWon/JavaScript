import MainController from './controllers/MainController.js'

// 컨트롤러 동작시점 : DOM이 모두 로드되었을때 
document.addEventListener('DOMContentLoaded', () => {
  MainController.init()
}) 