// 자바스크립트에 속한 언어는 Prototype-based programming 으로 불린다. 
// JS는 객체지향 언어(Java, C++)의 문법과 비슷하면서 함수 언어의 특징을 갖고있다. 

var person1 = {} 
person.name = 'soowon';
person.introduce = function(){
  return "HELLO, I'M" + this.name; 
}
document.write(person.introduce())
// 위는 객체 정의 var person = {} 과 
// 객체 변수(프로퍼티) 지정이 분산되어있다. 

// 아래와 같이
// 객체 정의 시 값을 셋팅하면 가독성/집중도가 높아진다. 
// 정의 중간에 다른 코드가 끼어들어 혼동/코드오염 될 위험도 줄일수있다.
var person2 = {
  'name' : 'egoing',
  'introduce' : function(){ return "HELLO, I'M "+ this.name}
}

// 어떤 방법이 좋느냐는 단정할 수 없다. 
// 상황에 따라 유연하게 사용하자


