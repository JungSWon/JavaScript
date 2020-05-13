// 객체로서의 함수 
// 객체인 함수는 Apply , Call이라는 메소드를 갖고있다. 

// 함수는 아래와 같이 호출 할 수 있다. 
function sum(x,y){return x+y;} // 함수 Literal 
sum(1,2); //3

var sum2 = new Function('x','y','return x+y'); // 이렇게도 가능 
sum2(1,2); //3

// var obj = {}   : 객체 Literal 
// new Object     : 이렇게도 가능 

// var Arr = []   : 배열 Literal 
// new Array(1,2,3) : 이렇게도 가능 



// 본론 시작 : 함수를 Apply를 이용하여 호출하였을때, this는 어떻게 변결 될까? 
var o = {}
var p = {}
function func(){
  switch(this){ // switch : if문 대체 : (값)이 break; 를 만날 때 까지 case들이 실행된다. 
    // 여기서 this === global 또는 window  
    case o : // if(this == o)
      console.log('o')
      break;
    case p : 
      console.log('p')
      break;
    case global:
      console.log('global') 
      break;
  }
}
func();
func.apply(o); // o 를 func()의 this로 할당하겠다
func.apply(p); // => var p = new func(); 

// 객체는 master, 메소드는 slave 로 비유되기도 함 

