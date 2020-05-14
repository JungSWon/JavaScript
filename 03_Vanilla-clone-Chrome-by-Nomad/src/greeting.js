const form = document.querySelector('.js-form')
const input = form.querySelector('input')
const greeting = document.querySelector('.js-greetings')

const User_LS = 'currentUser'

function paintGreeting(test){
    form.classList.remove('showing')
    greeting.classList.add('showing')
    greeting.innerText = `hello ${text}`
 }

function loadName(){
    const currentUser = localStorage.getItem('currentUser');
    if(currentUser === null ){

    }else {
        paintGreeting(currentUser);
    }
}


function init(){
    loadName();
}

init();