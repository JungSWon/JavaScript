import Todolist from './components/todolist.js'

export default class App {
  constructor(target){
    const todolist = new Todolist();
    target.appendChild(todolist.dom)
  }
}
