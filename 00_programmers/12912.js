function solution(a, b) {
  var answer = 0;
  if( a-b > 0 ){var from = b, end = a}
  else if( b-a > 0 ){var from = a, end = b}
  else{return a}
  for(var i = from; i < end+1; i++ ){answer+=i}
  return answer;
}