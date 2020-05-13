// JS에서 copy는 얕은 복사와 비슷하다 (하지만 다르다)
// 변수에 담긴 값이 원시테이터타입이라면 : 복사 
    // 원시데이터 타입 : String Number Boolean Null Undefined 
// 변수에 담긴 값이 원시테이터타입이 아니라면 : 참조 : 얕은 복사라고 이해하자 : 원본, 복제본 모두 바뀐다.  


    // 복사
a = [1,2,3,[1,1,1]]
b = a; 
b[3][1] = 0;
console.log(a)
console.log(b)

    // 참조(1)
var c = {'id':1};
var d = c; 
d.id = 2;
console.log('c:',c) // { id: 2 }
console.log('d:',d) // { id: 2 }
c.id = 100;
console.log('c:',c) // { id: 100 }
console.log('d:',d) // { id: 100 }

    // 참조(2)
var e = {'test':1};
var f = e;
f = {'test':100};
console.log('e',e)
console.log('f',f)
e = {'test':000};
console.log('e',e)
console.log('f',f)
// e,f 가 공통 참조하고 있던 데이터객체를 수정하면 둘다 바뀌지만 ,
// e 객체가 가리키는 데이객체를 자체를 다른 데이터객체로 바꾸면 
// e 만 바뀐다. 
// 마찬가지로 f 가 가리키는 객체 자체를 바꾸면 
// f 만 바뀐다. 