const todoForm = document.querySelector(".js-todoForm")
const todoInput = todoForm.querySelector('.todo-input')
const todoList = document.querySelector('.js-todoList')

// function saveTodo(val){
//   const savedList = localStorage.getItem('todos')
//   const newList = [];
//   if (savedList === null ){
//     newList = JSON.parse(savedList);
//   }
//   newList.push(val)
//   localStorage.setItem('todos',stringify(newList))
// }

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
  // saveTodo(val)
  todoInput.value = ''
}

function todoLoad(){
  const todos = localStorage.getItem('todos')
  if(todos !== null){
    // todos.forEach(element => {
    //   paintTodo(element)
    // });
  }else{
  }
}

function init(){
  todoLoad();
  todoForm.addEventListener('submit',handleSubmit)
}

init();