##  Object 확장의 위험성 
> 모든 객체에 영향을 주기 때문이다 

34챕터의 내용을 다시한번 살펴보자 
``` js

// Object.prototype에 contain 메소드 정의 : 
Object.prototype.contain = function(needle){
    for(var name in this){ // 파이썬문법 != 자스문법 : 자스에서는 name에 value가 아니라 key값이 할당된다.  
        if(needle == this[name]){return true};
    }
    return false;
} 

var o = {'name':'soowon','city':'seoul'}
for( name in o ){ console.log(name) }
// 출력 : name city contain 

var a = ['qwe','asd','zxc']
for( name in a ){ console.log(name) }
// 출력 : 0 1 2 contain 

```

- 출력에 `contain` 이 있다. 
- contain 메소드가 객체 o의 키값으로 들어가 있다는 뜻 


### 그렇다, 
- Object 확장 ( 사용자 정의 메소드 )를 할 때에는 
- 이 경우를 알고있다! , For in 문을 쓰지 않을것이다 ! 
- 라고 할 때는 써도 괜찮으나 , 
- 위험을 감수해야 한다. 


### 다만, 
- 아래와 같이 위험을 피하는 방법이 있긴 하다. 
- 방법 1 : 상속받은 프로퍼티가 아닌 본인의 직속 프로퍼티를 판별 
- 방법 2 : 마찬가지로 본인의 직속 프로퍼티 키를 나열한 어레이 생성 
``` js 
var arr = ['qwe','asd','zxc']
// 방법1 
for(name in arr){
    if( a.hasOwnProperty(name) ){ // return true/false 
        console.log(name)
    }
}

// 방법2
console.log(Object.keys(a))


```
