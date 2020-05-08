
// local 서버에서는 global 
function func(){
  if(global === this){ // web 서버에서는 window 
    console.log('global === this')
  }
}
func();

// => 여기서 this는 window다 ~ 
// this 는 함수호출의 맥락이다. this가 가르키는 대상은 함수 호출 상황에 따라 달라진다. 
