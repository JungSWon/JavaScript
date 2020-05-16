import Modal from './modal.js'

export default class Todolist {
  constructor(dom){
    this.parent = dom; // 데이터 올려보내는 타겟 = App
    this.dom = null; 
    this.inputTodo = null;
    this.submitBtn = null;
    this.todoList = null;
    this.todoListArray = [];
    this.setHTML();
  }
  emit(e, data){ // 데이터 올려보내기 
    const sendVal = new CustomEvent(e, {detail:data})
    this.parent.dispatchEvent(sendVal) // 이벤트를 듣는 요소는 dom이어야함
    // dispatchEvent를 하는 대상은 반드시 이벤트리스너를 갖고있어야(귀열고있어라)
  }

  deleteHandler(e){
    const target = e.target.parentNode
    target.remove();
  }

  
  paintTodo(val){
    const todo = document.createElement('li')
    todo.innerText = val
    todo.className ='todoTxt'
    todo.addEventListener('click', ()=>this.emit('sendVal',val) )
    const delBtn = document.createElement('button')
    delBtn.innerText = "X"
    delBtn.addEventListener('click',e=>this.deleteHandler(e))
    todo.appendChild(delBtn)
    this.todoList.appendChild(todo);
  }
  
  submitHandler(e){
    e.preventDefault();
    const val = this.inputTodo.value
    this.paintTodo(val)
    this.inputTodo.value = ''
  }
  
  setHTML(){
    const todoDiv = document.createElement('div')
    todoDiv.className = "todo-div"

    const form = document.createElement('form')
    form.className = 'todo-form'
    form.addEventListener('submit', e => this.submitHandler(e) )
    
    const inputTodo = document.createElement('input')
    inputTodo.placeholder= 'input todo!'
    inputTodo.className= 'input-todo'
    
    const submitBtn = document.createElement('button')
    submitBtn.className = 'submit-btn' 
    submitBtn.innerText ='SUBMIT'

    const todoList = document.createElement('ul')
    todoList.className = 'todo-list'

  
    
    todoDiv.appendChild(form)
    todoDiv.appendChild(todoList)
    form.appendChild(inputTodo)
    form.appendChild(submitBtn)
  
    this.dom = todoDiv
    this.inputTodo = inputTodo
    this.submitBtn = submitBtn
    this.todoList = todoList
  }
  
}
