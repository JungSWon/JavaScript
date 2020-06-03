// 배열의 원소중 특정 구간에 해당하는 것을 추출 

arr = [0,1,2,3,4,5,'q','w','e','r','t','y']
res1 = arr.slice(1,3) // [ 1,2 ]
res2 = arr.slice(3,1) // []
res3 = arr.slice(100) // []
res4 = arr.slice(2)   // [ 2, 3, 4, 5, 'q', 'w', 'e', 'r', 't', 'y' ]
res5 = arr.slice(-2)  // [ 't', 'y' ] 
res6 = arr.slice('q') // [ 0, 1, 2, 3, 4, 5, 'q', 'w', 'e', 'r', 't', 'y' ]
console.log(res1)
console.log(res2)
console.log(res3)
console.log(res4)
console.log(res5)
console.log(res6)
console.log(arr) // 원본은 수정되지 않는다. 
