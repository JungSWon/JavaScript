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


//