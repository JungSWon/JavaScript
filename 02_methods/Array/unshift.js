// 배열 맨앞에 원소 추가
// cf) push 는 맨 뒤에 추가 

arr2 = [1,2,3,4]
arrUnshift = arr2.unshift("UNSHIFT")
console.log(arr2,arrUnshift)
// [ 'UNSHIFT', 1, 2, 3, 4 ] 5 
// arrShift : arr.length를 의미 

arr = [1,2,3,4]
arrPop = arr.push('ADD')
console.log(arr,arrPop)
// [ 1, 2, 3, 4, 'ADD' ] 5
// arrPop : arr.length를 의미 
