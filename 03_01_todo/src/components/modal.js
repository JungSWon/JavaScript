export default class Modal {
  constructor(){
    this.dom = null;
    this.todoSpan = null;
    this.setHTML();
  }

  showModal(data){
    console.log(data)
    this.todoSpan.innerHTML = data
    this.dom.classList.toggle("showing")
    this.dom.classList.toggle("hiding")
  }

  hideModal(e){
    e.target.classList.toggle('showing')
    e.target.classList.toggle("hiding")
    console.log(e.target)

  }

  setHTML(){
    const modalDiv = document.createElement('div')
    modalDiv.classList.add('modal-div')
    modalDiv.classList.add('hiding')
    modalDiv.addEventListener("click",e => this.hideModal(e))

    const todo = document.createElement('span')

    modalDiv.appendChild(todo)

    this.dom = modalDiv
    this.todoSpan = todo 
  }
}