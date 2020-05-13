// https://programmers.co.kr/learn/courses/30/lessons/12918

// 틀린답
function solution(s) {
  var answer = true;
  if(s.length == 4 && s/1 == s){
  }else if(s.length == 6 && s/1 == s){
  }else{
      answer = false;
  }
  return answer;
}
// 패인 : s/1 == s 의 경우 '33.3'/1 == 33.3 으로 true 처리됨 
  // 12925번에서 배운대로 쿨하게 가려다 헤멘경우 
  // ParseInt()로 정확하게 분별하다. 



// 맞은답 
function solution(s) {
  var answer = true;
  if(s.length == 4 && parseInt(s) == s){
  }else if(s.length == 6 && parseInt(s) == s){
  }else{
      answer = false;
  }
  return answer;
}