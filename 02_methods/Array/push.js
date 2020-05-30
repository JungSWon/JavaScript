// 배열 마지막에 원소 추가
// cf) unshift 는 맨 앞에 추가 

arr = [1,2,3,4]
arrPop = arr.push('ADD')
console.log(arr,arrPop)
// [ 1, 2, 3, 4, 'ADD' ] 5
// arrPop은 arr.length를 의미 

arr2 = [1,2,3,4]
arrUnshift = arr2.unshift("UNSHIFT")
console.log(arr2,arrUnshift)
// [ 'UNSHIFT', 1, 2, 3, 4 ] 5 
// arrShift도 arr.length를 의미 
