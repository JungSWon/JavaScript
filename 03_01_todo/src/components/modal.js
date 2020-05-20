export default class Modal {
  constructor(){
    this.dom = null;
    this.todoSpan = null;
    this.show = false;
    this.setHTML();
  }

  handleModal(data){
    console.log(data)
    this.todoSpan.innerHTML = data
    this.show = !this.show;
    this.dom.classList.toggle("showing", this.show);
  }

  setHTML(){
    const modalDiv = document.createElement('div')
    modalDiv.classList.add('modal-div')
    modalDiv.addEventListener("click", e => this.handleModal(e.target.innerText))

    const todo = document.createElement('span')

    modalDiv.appendChild(todo)

    this.dom = modalDiv
    this.todoSpan = todo 
  }
}