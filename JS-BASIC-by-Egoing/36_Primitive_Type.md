## 원시 데이터 타입 

데이터타입은 크게 두가지로 나뉜다. 

|원시데이터타입|객체데이터타입|
|:---:|:---:|
|기초데이터타입|참조데이터타입|
|Primitive Type|Reference Type|
|숫자</br>문자열</br>불리언</br>null</br>undefined| 원시 외 모든 타입 |


###  레퍼 객체 
- 데이터타입과 객체가 다르게 동작할 때에 효용이 있다. 
- 레퍼 객체 먼저 살펴보자 
```js
var str = 'coding';
console.log(str.length); //6
console.log(str.charAt(0)); //'c'
```
- 객체가 아닌것은 원시 데이터 타입이고, 
- 문자열은 원시 데이터 타입이라고 했는데 

#### 그런데 왜? 
- 위 소스코드에서 `str` 문자열이 객체처럼 작동하고 있는가? 
  - `.` 의 정식명칭은 Object access Operator = 객체 접근 연산자이다. 
  - `.` 앞에있는 것이 바로 객체라는 것을 의미한다. 
  - 객체이기 때문에 프로퍼티가 존재하고, 메소드가 존재한다. 
  - 즉, `var str = 'coding';` 에서 `str` 에 담겨있는 무엇인가는 객체이고 그 객체는 문자열 `'coding'`이다. 

#### 그렇다면 두 진술이 생겨버렸다. 
- 문자열은 원시 데이터 타입이다. 
- `var str = 'coding';` 에서 문자열은 객체이다. 

#### 다시, 왜? 
- 자바스크립트에서 문자열은 원시 데이터타입이 맞긴한데 
- 객체인 것처럼 동작해야지만 제어가 가능하다. 
- 제어: 몇개의 글자인지, n번 째 자리수에 있는 문자는 무엇인가를 알기 등  
- 그래야 객체 지향 프로그래밍으로써 동작 방법이 일관될 수 있다. 
- 그래서 JS는 문자열과 같은 원시데이터 타입을 객체로서 사용할 때,
- 임시로 그것을 객체로 만들어준다. 
    - `var str = 'coding';` 에는 
    - `str = new String('coding');` String객체 생성 명령이 숨어있다. 
    - JS는 `var lng = str.length;` 제어를 해 준 후, 
    - 다시 원시 데이터 타입으로 돌려준다 .

#### 그 증거
- (1) `.` 을 통해 객체로서 사용한 순간 객체화 된 `str` 의 `prop` 정의 명령에는 오류가 나지 않는다. 
-  그러나 이후 `str` 은 원시데이터로 돌아가고, `prop`은 존재하지 않게된다. 그렇기 때문에  
-  (2) `str.prop`으로 `str`의 `prop`에 접근하면 `undefined` 가 출력된다. 
```js
var str = 'coding'         
str.prop = 'everybody';     // (1) 오류없이 실행 
conosole.log (str.prop);    // (2) undefined
```

### Wrapper Object (1)
- 위처럼 JS는 원시데이터타입을 객체처럼 다룰 수 있도록 하기 위한 객체를 제공한다.
- 그것이 Wrapper Object 래퍼객체 
- 원시데이터타입이 있을 때, 그것을 감싸주는 객체
- `String('coding')` 에서 
  - 레퍼객체 : `String() ` 이 
  - 원시데이터타입 : `'coding'`
- 참고 : JS는 이 작업을 자동으로 해주지만, 어떤 언어는 그렇지 않다. 

### Wrapper Object (2)
- 숫자 : Number
- 문자열 : String
- 불리언 : Boolean
- null : - 
- undefined : -  

- null과 undefined는 래퍼객체가 존재하지 않는다. 
  - `null.prop = 'egoing'` 을 실행하면 에러가 난다. 