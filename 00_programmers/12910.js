// arr 요소 중 divisor로 나누어떨어지는 요소만 오름차순 정렬 =


function solution(arr, divisor) {
  var answer = [];
  for(var i=0; i < arr.length; i++){
      if(arr[i]%divisor == 0){
      answer.unshift(arr[i])
  }
  }if( answer.length == 0 ){
      answer.unshift(-1)}else{
          answer.sort(function(a,b){return a-b})
      }
  return answer;
}