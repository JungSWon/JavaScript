const todoForm = document.querySelector(".js-todoForm")
const todoInput = todoForm.querySelector('.todo-input')
const todoList = document.querySelector('.js-todoList')
let savedList = JSON.parse(localStorage.getItem('todos'))

function delTodo(id){
  const newList = savedList.filter(element => element.id !== parseInt(id) )
  savedList = newList
  localStorage.setItem('todos',JSON.stringify(savedList))
}

function handleDelete(event){
  delLi = event.target.parentNode
  console.log(delLi.id,delLi, '!!!')
  todoList.removeChild(delLi)
  delTodo(delLi.id)
}

function saveTodo(val,id){
  const obj = {
    "id": id, "todo" : val
  }
  if (savedList === null ){
    localStorage.setItem('todos',JSON.stringify([obj]))
    savedList = [obj]
  }
  else{
    savedList.push(obj)
    localStorage.setItem('todos',JSON.stringify(savedList))
  }
}

function paintTodo(val,id){
  const addTodo = document.createElement('li')
  const delBtn = document.createElement('button')
  const span = document.createElement('span')
  delBtn.addEventListener('click',handleDelete)
  addTodo.setAttribute('id',id)
  delBtn.innerText = 'X'
  span.innerText = val
  addTodo.appendChild(span)
  addTodo.appendChild(delBtn)
  todoList.appendChild(addTodo)
}

function handleSubmit(e){
  e.preventDefault();
  const val = todoInput.value
  const id = savedList !== null ? savedList[savedList.length-1].id+1 : 0
  paintTodo(val,id)
  saveTodo(val,id)
  todoInput.value = ''
}

function todoLoad(){
  if(savedList !== null){
    savedList.forEach(element => {
      paintTodo(element.todo, element.id)
    });
  }else{
  }
}

function init(){
  todoLoad();
  todoForm.addEventListener('submit',handleSubmit)
}

init();