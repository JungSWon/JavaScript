// 배열의 특정 구간을 추출하거나, 
// 배열의 특정 구간 특정 배열 추가 

arr = ['q','w','e','r','t','y']

res = arr.splice(2) // 2 인덱스 부터 잘라오겠다
console.log(arr, res)
// [ 'q', 'w' ] [ 'e', 'r', 't', 'y' ]
// 원본이 수정된다. 

arr2 = ['q','w','e','r','t','y']
res2 = arr2.splice(2,3) // 2 인덱스부터 세개 요소를 잘라오겠다 
console.log(arr2, res2)
// [ 'q', 'w', 'y' ] [ 'e', 'r', 't' ]

arr3 = ['q','w','e','r','t','y']
res3 = arr3.splice(2,3,'A','S','D','F','G') 
// 2 인덱스부터 세개 요소를 잘라오고, 그 자리에 요소들을 넣겠다  
console.log(arr3, res3)
// [ 'q', 'w', 'A', 'S', 'D', 'F', 'G', 'y' ] [ 'e', 'r', 't' ]



