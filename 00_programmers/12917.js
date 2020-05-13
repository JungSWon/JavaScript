// https://programmers.co.kr/learn/courses/30/lessons/12917

function solution(s) {
  var answer = '';
  var temp = [];
  for(var i=0; i<s.length; i++){
      temp.push(s[i])
  }
  answer = temp.sort().reverse().join('');
  return answer;
}

