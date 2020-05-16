export default class API {
  constructor(dom){
    this.parent = dom; 
    this.dom = null;
    this.callBtn = null; 
    this.resDiv = null; 
    this.resSpan = null;
    this.setHTML();
  }
  

  temp_fetchCall(e){
    console.log(e.target)
    fetch(e.target.innerText)
    .then( res => console.log('?') )
    .then( text => document.getElementsByClassName('res-span').innerText = text )
    .catch(alert('error'))
  }

  fetchCall(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(res => res.json())
      .then( json => {
        // console.log(json)
        // console.log(json.userId, json.title)
        this.resSpan.innerText = json.title
      }).catch(alert('err'))
  }

  temp_jsonCall(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(json => {
      for(var i = 0; i < 30 ; i++){
        //   <img src="" alt="" srcset="">
        const imgEl = document.createElement('img')
        imgEl.setAttribute('src',json[i].url)
        this.resDiv.appendChild(imgEl)
        console.log(json[i].url)
      }
    })
  }

  jsonCall(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => {
      if(res.ok){res.json()}
      throw new Error('NOT OK');
    })
    .then(json => {
      for(var i = 0; i < 30 ; i++){
        //   <img src="" alt="" srcset="">
        const imgEl = document.createElement('img')
        imgEl.setAttribute('src',json[i].url)
        this.resDiv.appendChild(imgEl)
        console.log(json[i].url)
      }
    }).catch(err => alert(err.message))
  }

  fetchError(){
    fetch('CALL').then( res=> {
      if(res.ok) { console.log('success') }
      throw new Error('Network response was not ok.');
    }).then(function(myBlob) { 
      var objectURL = URL.createObjectURL(myBlob); 
      myImage.src = objectURL; 
    }).catch(function(error) {
      console.log('There has been a problem with your fetch operation: ', error.message);
    });
  }

  setHTML(){
    const APIDiv = document.createElement('div')
    const callBtn = document.createElement('button')
    callBtn.innerText = 'CALL'
    callBtn.addEventListener('click',e => this.fetchCall(e))

    const jsonBtn = document.createElement('button')
    jsonBtn.innerText ='JSON'
    jsonBtn.addEventListener('click', e=> this.jsonCall(e))

    const resDiv = document.createElement('div')
    const resSpan = document.createElement('span')
    resSpan.classList.add('res-span')

    resDiv.appendChild(resSpan)
    APIDiv.appendChild(callBtn)
    APIDiv.appendChild(jsonBtn)
    APIDiv.appendChild(resDiv)
    this.dom = APIDiv
    this.callBtn = callBtn
    this.resSpan = resSpan
    this.resDiv = resDiv
  }
}
