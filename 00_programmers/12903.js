function solution(s) {
  var answer = '';
  var slnth =  s.length 
  if( slnth%2 == 0 ){
      answer = s.slice( slnth/2 -1 , slnth/2 +1 )
  }else{
      answer = s[ Math.floor(slnth/2) ]
  }
  return answer;
}

solution('abcde') //'c'
solution('qwer') //'we'

// array.splice(i,j,개수) 
// array.slice(i,j)