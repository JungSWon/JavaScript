const form = document.querySelector('.js-form')
const input = form.querySelector('input')
const greeting = document.querySelector('.js-greetings')

const User_LS = 'currentUser'

function handleSubmit(e){
    e.preventDefault();
    const currentVal = input.value
    localStorage.setItem(User_LS,currentVal)
    paintGreeting(currentVal)
}

function paintGreeting(text){
    form.classList.remove('showing')
    console.log(form)
    greeting.classList.add('showing')

    greeting.innerText = `hello ${text}`
 } 

function askForName(){
    form.classList.add('showing')
    form.addEventListener("submit",handleSubmit);
}
function loadName(){
    const currentUser = localStorage.getItem('currentUser');
    if(currentUser === null || currentUser === '' ){
        console.log(currentUser)
        askForName()
    }else {
        paintGreeting(currentUser);
    }
}


function init(){
    loadName();
}

init();