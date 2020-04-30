function solution(n) {
  var answer = '';
  var temp = [];
  for(var i = 0 ; i < n ; i ++){
      if(i%2 == 0 ){
          temp.push('수')
      }else{
          temp.push('박')
      }
  }
  answer = temp.join('')
  return answer;
}