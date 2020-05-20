import Todolist from './components/todolist.js'
import Modal from './components/modal.js'
import API from './components/API.js'

export default class App {
  constructor(target){
    const todolist = new Todolist(target);
    target.appendChild(todolist.dom)

    const modal = new Modal();
    target.appendChild(modal.dom)

    target.addEventListener('sendVal', e => {
      modal.handleModal(e.detail);
    });

    const api = new API();
    target.appendChild(api.dom);
  }
}
