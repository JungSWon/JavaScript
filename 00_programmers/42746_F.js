// 문제를 다시맇어보면 
// 순열 중 가장 큰 수 찾기 

function solution(numbers) {
  var answer = '';
  var splitNum = [];
  for(var i = 0; i < numbers.length; i++ ){
      numbers[i] = numbers[i].toString()
      for(var j = 0; j < numbers[i].length; j++ ){
          splitNum.push(numbers[i][j])
      }
  }
  return splitNum.sort(function(a,b){return b-a}).join('');
}