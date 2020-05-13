// 모든객체는 전역객체의 프로퍼디다. 

function func(){
  console.log('hello?');
}
func(); // 아래와 같다. 
window.func(); // 객체.속성 : 여기서 속성=함수이므로 : 객체.메소드 

// func(); 가 돌아가는 이유는 
        // : 속성 앞에 객체가 생략될 때 디폴트 객체로 window가 생략되었기 때문이다. 
// = func(); 는 암시적으로 window.func(); 를 의미한다. 


// 객체 안에서 메소드를 정의했을때, 그 객체는 대체 무엇일까? 
var o = {
  'func' : function(){console.log('hello!');}
}
o.func(); // 아래와 같다. 
window.o.func(); 
// JS에서 모든 객체(여기서는 o)는 기본적으로 전역 객체(여기서는 window)의 프로퍼티인 것이다. 


// 전역객체 API 
// https://opentutorials.org/course/50/44
// 위에서 JS 전역객체로 가지고 있는 함수리스트를 확인할 수 있다. 
// 전역객체는 호스트 환경에 따라 달라진다.
    //: 웹브라우저에서 전역객체는 window이고 
    //: node.js 와 같은 서버측 JS 에서는 global이다. 