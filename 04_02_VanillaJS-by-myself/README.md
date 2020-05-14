# Vanilla Javascript 

## 학습목표 
- 강의 중 개념 정립이 필요한 개념 정리하고 가기 


## TODO list 
- [ ]setInterval
  - `setinterval(function(){console.log('Hi')},3000)`

- [ ] CustomEvent  
  - `const evt = new CustomEvent(event, { detail: data })`
  - ../03_01_VanillaJS-by-JeongWhan/1-vanila/js/views/View.js [23]
- [ ] DispatchEvent  
  - `this.el.dispatchEvent(evt)`
  - ../03_01_VanillaJS-by-JeongWhan/1-vanila/js/views/View.js [24]
- [ ] Promise  
  1. `return Promise.resolve(this.data)`
     - ../03_01_VanillaJS-by-JeongWhan/1-vanila/js/models/HistoryModel.js [14]
  2. 
  ``` js
  return new Promise(res => {
      setTimeout(() => {
        res(this.data)
      }, 200)
    }) 
  ```
- [ ] ObjectCreate  
  - `Object.create(View)`
  - ../03_01_VanillaJS-by-JeongWhan/1-vanila/js/views/FormView.js [6]
- [ ] emit  
  - `this.emit('@submit',{input:this.inputEl.value})`
  - ../03_01_VanillaJS-by-JeongWhan/1-vanila/js/views/FormView.js [33]

