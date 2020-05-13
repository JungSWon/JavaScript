// phone_number를 뒷 네자리 수만 빼고 모두 * 처리하기

function solution(phone_number) {
  var answer = '';
  for(var i=0; i < phone_number.length-4; i++){
      answer = answer.concat('*')
  }
  answer = answer.concat(phone_number.slice(-4))
  return answer;
}