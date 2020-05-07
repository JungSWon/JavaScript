function solution(progresses, speeds) {
  var answer = [];
  var remain = [];
  var idx = 0, cnt = 0;
  for(var i= 0 ; i < progresses.length; i++){
      remain.push( Math.ceil( (100 - progresses[i])/speeds[i] )  )}
  console.log(remain)
  for(var i= 1 ; i < remain.length; i++){
    console.log( idx, i, remain[idx], remain[i])
    if(remain[idx] < remain[i]){ answer.push(cnt+1); cnt = 0; idx = i;}
    else{cnt++;}
  }answer.push(cnt+1)
  console.log(answer)
  return answer; 
}

solution([25,20,10],[10,10,10])