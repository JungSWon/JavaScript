// 배열 정렬

var nums = [99,20,11,10,9,8,6,5,1];

// 1. arr.sort()
// nums : 배열 객체 , sort : 메소드 (함수지만 객체에 속해있으므로) 
console.log( nums.sort() ); 

// 2. arr.sort(ruleDetail)
// sorting 기준 지정(1)  
var sortfunc = function(a,b){
  console.log(a,b);
  if (a > b){
    return 1;
  } else if (a < b){
    return -1;
  } else{
    return 0;
  }
}
console.log(nums.sort(sortfunc));

// 3-1. arr.sort(ruleSimple)
var sortfunct = function(a,b){
  return a-b
}
console.log(nums.sort(sortfunct))

// 3-2. arr.sort(ruleSimple)
var sortfuncti = function(a,b){
  return b-a
}
console.log(nums.sort(sortfuncti))


// 이때 sortfunc(); 는 콜백함수이다. 
// 콜백함수를 인자로 받는 오리지널함수(sort)의 동작 방법을 바꾼다.
// JS에서 함수=값이기에 가능한 부분!