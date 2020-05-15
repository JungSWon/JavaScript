const todoForm = document.querySelector(".js-todoForm")
const todoInput = todoForm.querySelector('.todo-input')
const todoList = document.querySelector('.js-todoList')
const savedList = JSON.parse(localStorage.getItem('todos'))

function saveTodo(val){
  if (savedList === null ){
    localStorage.setItem('todos',JSON.stringify(new Array))
  }
  savedList.push(val)
  localStorage.setItem('todos',JSON.stringify(savedList))
}

function paintTodo(val){
  console.log(val)
  const addTodo = document.createElement('li')
  const delBtn = document.createElement('button')
  const span = document.createElement('span')
  delBtn.innerText = 'X'
  span.innerText = val
  addTodo.appendChild(span)
  addTodo.appendChild(delBtn)
  todoList.appendChild(addTodo)
}

function handleSubmit(e){
  e.preventDefault();
  const val = todoInput.value
  paintTodo(val)
  saveTodo(val)
  todoInput.value = ''
}

function todoLoad(){
  if(savedList !== null){
    savedList.forEach(element => {
      paintTodo(element)
    });
  }else{
  }
}

function init(){
  todoLoad();
  todoForm.addEventListener('submit',handleSubmit)
}

init();