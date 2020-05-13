// JS : 함수형 언어 
// "자스에는 객체 이전에 함수가 있었다"

// 생성자 : Constructor : 객체를 생성 하는 함수

function Person(){}
var p0 = Person();
console.log(p0) // undefined 

// new 함수();
var p = new Person();
console.log(p) // Person{} 
 // new가 붙은 함수 : 객체 생성자
 // new로 인해 생성자Person()은 비어있는 객체를 만든다.
var p1 = {} // 와 같은 기능인거다. 

p.name = 'Soowon';
p.introduce = function(){
  return 'MY NAME IS' + this.name;
} // 메소드를 만들었다. 

var p2 = new Person();
p2.name = 'Nami';
p2.introduce = function(){
  return 'MY NAME IS' + this.name;
} // 메소드가 중복되었다. 


// 개선해보자 
function AnotherPerson(name){
  this.name = name;
  this.introduce = function(){return 'MY NAME :'+ this.name;}
}
var p3 = new AnotherPerson('SOOWON JUNG');
console.log(p3.introduce());

var p4 = new AnotherPerson('NAMI KIM');
console.log(p4.introduce());
// 메소드가 중복되지 않는다. 

// 생성자(AnotherPerson)는 객체(name, introduce())를 초기화(initialize) 한다. 
// 코드의 재사용성이 증대되었다! 