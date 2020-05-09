// 상속(inheritance)을 통해 로직을 재활용 할 ㅅ ㅜ있다. 


function Person(name){
  this.name = name;
  this.introduce = function(){
    return 'MY NAME : '+this.name;
  }
}
var p1 = new Person('soowon');
console.log(p1.introduce());


// 이렇게 기존의 객체에 새로운 메소드를 생성할 수 있다. 
// 객체.prototye.프로퍼티 = 값을 매겨줄 수 있다. 
Person.prototype.newIntroduce = function(){
  return "THIS IS MY NAME: "+ this.name;
}
var p2 = new Person('SOOWON_NEW');
console.log(p2.newIntroduce());


// 슬슬 상속 준비를 해보자 
Person.prototype.name =null;
Person.prototype.thirdIntroduce = function(){
  return 'MY NAME IS '+this.name; 
}
var p3 = new Person('Soowon Jung');
console.log(p3.thirdIntroduce());


// 생성자 Person로 만든 객체가 가진 속성을 
  // 생성자 Programmer로 만든 객체가 그대로 갖도록 해보자
function Programmer(name){
  this.name = name ;
}
Programmer.prototype = new Person();  // 상속시켰다. 

var p4 = new Programmer('SWonandon');
console.log(p4.introduce())
console.log(p4.newIntroduce())
console.log(p4.thirdIntroduce())


// Programmer 생성자에 기능을 추가해보자 
Programmer.prototype.coding = function(){
  return 'console.log("hello world")'; 
}

var p5 = new Programmer('SW.onandon');
console.log(p5.introduce());
console.log(p5.coding());



// 복습, 
// 이제 Person 메소드를 상속받은 Designer 생성자와 design(); 메소드를 생성해보자 
function Designer(name){
  this.name = name; 
}
Designer.prototype = new Person(); // 상속
Designer.prototype.design = function(){ // 메소드추가
  return 'Design Tools : Illustrator etc.'; 
}

var d1 = new Designer('swan');
console.log(d1.introduce());
console.log(d1.design());
