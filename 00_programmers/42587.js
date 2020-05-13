function solution(priorities, location) {
  var answer = 0;
  var newArray = [];
  for(var i = 0; i < priorities.length; i++){
    newArray.push([priorities[i],i])
  }
  console.log(newArray)

  while(){
    // now = [1,0] , mx = [5,1]
    var now = newArray.shift();
    var mx = Math.max.apply(null,newArray)
    var mxidx = newArray.indexOf(mx)

  }


  return answer;
}

solution([1,5,3,2,1],3)
