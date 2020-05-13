b// 생성자 안에서 this는 어떤 의미를 갖는가? 

var funcThis = null;

function Func(){
  funcThis = this;  
}
var o1 = Func(); 
if(funcThis === global){ // 전역변수 funcThis = null -> this -> func()의 객체 : window.func() 이므로 -> window 
  console.log('true')  // true 
}

var o2 = new Func(); // 생성자 new 를 통해서 만들어진 객체는 o2이다. 
if(funcThis === o2){ // 그러므로 new Func() 의 this 는 : o2.func()이므로 : o2
  console.log('o2')  // o2
}



// 참고 
// var o2 = new Func(); 에서 순서는 
  // Func()가 실행된 후에, 그것이 o2가 객체로 할당되므로 

  // function Func(){ if( this == o2){ funcThis = this ;} }
  // 위와같이 함수 안에서는 아직 o2가 this 가 될 수 없다. 
  