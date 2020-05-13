// 함수 안에서도 copy, reference가 동일하게 동작한다. 


var a = 1;
function ref(b){
  b = 2;          // var b = a; 와 같음
  console.log(b); // 2
}
ref(a);
console.log(a); // 1


var a = {'id': 1};
function ref2(b){
  b = {'id':2};
  console.log(a) // {'id':1}; 
  console.log(b) // {'id':2};
}
ref2(a)
console.log(a); // {'id':1};


var a = {'id': 1};
function ref3(b){
  b.id = 2
  console.log(a) // {'id':2}; 
  console.log(b) // {'id':2};
}
ref3(a)
console.log(a); // {'id':2};