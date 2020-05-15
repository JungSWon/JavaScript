export default class Todolist {
  constructor(){
    this.dom = null; 
    this.setHTML();
  }

  submitHandler(e){
  }
  
  setHTML(){
    const form = document.createElement('form')
    form.className = 'todo-form'
    form.addEventListener('submit',this.submitHandler)
    
    const inputTodo = document.createElement('input')
    inputTodo.placeholder= 'input todo!'
    inputTodo.className= 'input-todo'
    
    const submitBtn = document.createElement('button')
    submitBtn.className = 'submit-btn' 
  
    form.appendChild(inputTodo)
    form.appendChild(submitBtn)
    this.dom = form
  }
  
}
