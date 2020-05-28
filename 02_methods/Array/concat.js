// 복수 배열을 결합하여 리턴 

arr = new Array(1,2,3)
arr2 = new Array(1,2,3)
arr3 = new Array(4,5,6)

res = arr.concat(arr2,arr3)

console.log(res) //[ 1, 2, 3, 1, 2, 3, 4, 5, 6 ]
console.log(arr) // [1, 2, 3]

