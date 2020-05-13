// 표준 내장 객체의 확장 
// 표준 내장 객체 : 자스가 기본으로 갖고있는 객체 
    // 종류 
// Object
// function
// Array 
// String
// Boolean
// Number
// Math
// Date
// RegExp
    // 언어가 제공하는 API는 이게 끝 
// 그러나 호스트환경이 제공하는건 더 많지롱 

//cf) 우리가 직접 정의해서 사용하는 객체는 : 사용자 정의 객체 

// 내장객체에 + 필요에 따라 기능 추가가 가능하다. 


// 내장객체에 기능 추가하기 
var arr = new Array('seoul','NY', 'ladarkh','busan','Tsukuba')
function getRandomValueFromArray(arr){
    // arrray 요소를 랜덤하게 갖고오는 기능을 구현해보자
    var index = Math.floor(arr.length*Math.random()) // random() : 0 ~ 1 사이의 값이 리턴된다.
    return arr[index];
}
console.log(getRandomValueFromArray(arr));



// 그럼 이제 프로토타입에 적용시켜보자 
    // 내장 객체인 Array의 원형 프로퍼티에 
    // random 이라고 하는 함수를 정의할거다
Array.prototype.random = function(){
    var index = Math.floor(this.length*Math.random());
    return this[index];
    // 여기서 this는 배열 객체 자체
} 
var arr2 = new Array('seoul','NY', 'ladarkh','busan','Tsukuba')
console.log(arr2.random()); // arr2가 this가 된다. 

// 이렇게 하면 random이라고 하는 사용자자정의 메소드가 Array에 속한게(관련된게) 명백하게 보인다. 
