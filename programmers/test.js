function solution(arr){
  // var answer = -1;
  var round = 0;
  while( arr.length > 1 ){
    var newArr = [];
    var cnt = 1;
    for (var i =0; i<arr.length; i++){
      if(arr[i] != arr[i+1]){newArr.push(cnt); cnt = 1}
      else{cnt++;}
    }
    console.log(newArr)
    arr = newArr;
    round++
  }
  if(arr[0] != 1){round++;}
  return round
}

console.log(solution([1,1,1,3,3,2,2,2]))
