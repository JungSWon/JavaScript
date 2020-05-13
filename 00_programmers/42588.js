function solution(heights) {
  var answer = [];
  for(var i = 0; i < heights.length ; i++){answer.push(0)}
  for(var sender=heights.length-1 ; sender> 0; sender-- ){
      for(var receiver=sender-1; receiver>-1; receiver--){
          if(heights[receiver] > heights[sender]){ answer[sender] = receiver+1; break }
      }
  }
  return answer;
}