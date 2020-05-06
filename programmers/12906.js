// 문제를 잘못 이해함 
// 중복되는 모든 요소 지우는 줄 알았음,, 
function fail_solution(arr)
{
    var answer = [];
    for(var i=0; i<arr.length; i++){
        if( !answer.includes( arr[i] ) ){
            answer.push(arr[i])
           }
    }
    return answer;
}

function solution(arr)
{
    var answer = [arr[0]];
    for(var i=0; i<arr.length-1; i++){
        if(arr[i] != arr[i+1]){
            answer.push(arr[i+1])
        }
    }
    return answer;
}

solution([1,1,3,3,0,1,1])