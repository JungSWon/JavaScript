// Prototype : 원형 
// JS 는 Prototype을 통해 상속을 지원한다. 

function Ultra(){}
Ultra.prototype.ultraProp = true;

function Super(){}
Super.prototype = new Ultra();  // Super가 Ultra를 상속받았다. 

function Sub(){}
Sub.prototype = new Super(); // Sub이 Super를 상속받았다.


var obj = new Sub();
console.log(obj.ultraProp); // true 
// ultraProp을 찾아라: 상속관계를 거슬러 올라가 Sub -> Super -> Ultra에서 ultraProp=true;를 찾을 수 있다.
// -> 어떻게 가능할까? prototype 덕분

// prototype 은 : 객체의 프로퍼티 구성, 원형을 가리킨다.


// 그렇다면, Prototype의 Chain 관계에 대해 알아보자

var obj2 = new Sub();
console.log(obj2.ultraProp); // 원래는 Ultra.prototype.ultraProp = true; 이었던 값을 
Sub.prototype.ultraProp = 1; 
// 위처럼 ultraProp 값을 Sub()이나 Super()단에서 바꿀 수도 있고, 
console.log(obj2.ultraProp);

obj2.ultraProp = 200;  // 객체에 직접 값을 바꿀수도 있다. 
console.log(obj2.ultraProp);



var obj_temp = new Sub(); // 새로운 객체를 생성하여
obj_temp.ultraProp = 'AllNewUltraProb' // 그 객체의 ultraProp 값을 바꾸고, 
Sub.prototype = obj_temp; // 그 객체를 Sub 프로퍼티로 오버라이드한다

console.log(obj2.ultraProp, '이러하다'); // 그렇다면 Sub의 객체인 obj2 의 ultraProp 값은 어찌 될것인가? 
var newObj = new Sub();
console.log(newObj.ultraProp, '이러하다2'); // 그렇다면 새로운 Sub 객체의 ultraProp값은 어떨까? 

