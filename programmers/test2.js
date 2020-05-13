function intToSortedArr(obj){
  var tempArr = []
  var obj = String(obj)
  for(var j = 0; j <obj.length; j++){
    tempArr.push(obj[j])
  }
  return tempArr.sort()
}

function solution(arr){
  var sortedArr =[]
  for(var i=0; i<arr.length; i++){
    sortedArr.push(intToSortedArr(arr[i]))
  }
  var cntGroup = 0;
  while(sortedArr.length > 0){
    var flag = sortedArr.pop()
    console.log('flag',flag)
    for(var j = sortedArr.length-1; j>-1; j--){
      if(flag.join('') == sortedArr[j].join('')){
        sortedArr.splice(j,1)
        console.log(sortedArr)
      }
    }
    cntGroup++;
  }
  return cntGroup;
}

console.log(solution([112,1814,121,1481,1184])) // 2