var a = ['qwe','asd','zxc'];
console.log(a.includes('qwe') ) // true
// 위와 같은 기능을 하는 메소드를 직접 만들어보자 
// a.contain('qwe') 가 기능하도록! 


// 사용자 정의 메소드를 정의하려면 prototype안에 넣으면 된다. 
Object.prototype.contain = function(needle){
    for(var name in this){ // 파이썬문법 != 자스문법 : 자스에서는 name에 value가 아니라 key값이 할당된다.  
        if(needle == this[name]){return true};
    }
    return false;
} 

var o = {'name':'soowon','city':'seoul'}
console.log( o.contain('soowon')) // true 
console.log( a.contain('qqq')); // false 


// 그러나 
// Object 확장의 위험!! 35챕터로 넘어가서 확인하자 

    // 미리보기 : 출력결과 확인 
for(name in o){
    console.log(name)
}

console.log(Object.keys(a))

for(name in a){
    console.log(name)
}
