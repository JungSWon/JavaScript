// 틀린이유 : sort();는 사전순 정렬임을 잊지말자..!! 
// sort(); 에 콜백함수를 지정해주어야한다. 
  // 참고 : ../opentutorials/18_CallBack.html


var array= 	[1, 5, 2, 6, 3, 7, 4]
var commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]]

function callback(a,b){
  return a-b
}

function solution(array, commands) {
  var answer = [];
  for(var idx = 0; idx < commands.length; idx++){
      var i = commands[idx][0], j = commands[idx][1], k = commands[idx][2]
      var temp = array.slice(i-1,j).sort(callback);
      answer.push(temp[k-1])
  }
  return answer;
}

console.log(solution(array,commands));