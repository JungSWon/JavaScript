## Object 
> Object라는 이름을 가진 객체가 있다. 

- 오브젝트 기본 개념 : 데이터를 저장하는 배열과 비슷한 그릇 내지 컨테이너 
- 프로토타입 상속에서 최상단 부모는 사실 Object를 상속받고 있는거다! 
  - 모든 객체의 디폴트 부모가 되고, 모든 객체의 원형이 되고
  - 모든 객체가 갖고있는 프로퍼티라는 말이 된다. 
  - 모든 객체가 가져야할 기능이 있다면, 오브젝트의 프로토타입으로 지정되어 있음을 유추할 수 있다.
- 결과적으로, 모든 객체에 할당할 기능을 만들고 싶다면? 오브젝트에 사용자 정의 객체를 만들면 된다!


### Object API
- Object 안에는 어떤 형태의 메소드가 있고, 
- 메소드들은 형태에 따라 어떻게 사용할지 사용법에 집중하여 학습해보자 
- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object

#### `Objct.keys();`
```js 
var arr = ['a','b','c'];
console.log('Object.keys(arr)',Object.keys(arr))
// Object.keys(arr) ['0','1','2'] 
```
배열에서 key는 인덱스 이므로! 

```js
var obj = {'name':'soowon','age':29,'city':'seoul'}
console.log('Object.keys(obj)',Object.keys(obj))
// Object.keys(obj) [ 'name', 'age', 'city' ]
```


#### `Object.prototype.toString();`
- 이 메소드가 어떤 기능을 하는지보다는 
- Object.prototype.메소드(); 프로토타입이 함께 호출된 형태에 주목!
``` js
var o = {}; 
var o = new Object();
console.log('o.toString()', o.toString());
//o.toString() [object Object]
```

```js
var a = Array(1,2,3);
console.log('a.toString()', a.toString());
// a.toString() 1,2,3
```

#### 왜 
- (1) 어떤 메소드는 `Object.메소드();` 이고, 
- (2) 어떤 메소드는 `Object.prototype.메소드();` 일까? 


(1)의 경우는 인자로 어떤 값을 받아서 처리한다.
Objcet키워드는 정확히 말하면 생성자 함수일 것이다.
함수는 객체이기 때문에 프로퍼티를 갖고 있을 수 있다. 
keys 메소드는 다음과 같이 정의 되었을 것이다. 
`Object.keys = function(인자){}`
그렇기 때문에 keys를 호출할 때는 `Object.keys(인자);`면 된다. 


(2)의 경우는 어떤 객체를 만든다. 
그 객체를 담고있는 `식별자.toString`
Object라고 하는 생성자 함수에서 다음과 같이 정의되었을 것이다. `Object.prototype.toString = function(){}`
메소드가 프로토타입 소속이라는 것은 : 생성자 함수를 이용해서 `new Object`라고 실행시키는 순간, 
객체를 만들고 - 객체는 프로토타입이라고 하는 특수 프로퍼티에 객체의 원형을 저장한다.  
객체에 대한 메소드로서 사용하는 것이다. 

그런데, 앞서 
Object라고 불리는 객체는 모든 객체의 공통 부모라고 했다. 
Array라는 객체를 생성할 때에도, Object의 자식이므로 
Array를 통해 만들어진 어떤 객체는 객체.Tostring을 통해 메소드를 사용할 수 있는 것이다!!! 


이를 이해하면 
메뉴얼만 보아도 메소드를 사용할 수 있고, 
이해 못한다면 
메소드 활용법을 외워야한다~~ 

중요한 것은 Object는 최초의 조상 (~ 매트릭스의 오라클같은 존재 ~)
Object가 갖고 있는 메소드 중, 중간에 `.prototype`이 끼어있는 메소드는 
모든 객체들이 상속받고있는 공통의 기능인 것이다. 

다른말로, 
내 프로젝트의 모든 객체가 공통으로 가져야 할 메소드가 있다면
`Object.prototype` 을 수정하여 기능을 만들 수 있다는 것이다. 

