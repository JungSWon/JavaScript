var o = {
  func : function(){
    if(o === this){
      console.log('o === this');
    }
  }
}

o.func(); // 'o === this' 출력

// 즉슨, 메소드(func)가 소속되어있는 객체(o)를 this 로 접근할 수 있다. 
 // =  o 안의 func함수에서 this를 부르면 = o 자신이 호출된다. 

// 26_func_this.js : func() 안의 this === window 로 미루어 봤을 때 미루어 보아  
// 어떤 객체에 속하지 않은 함수func() 는 사실 window.func() 인 것이고, 

// 정리하면 
// func() => window.func() => 여기서 this === window 
//  o.func() => 여기서 this === o 
