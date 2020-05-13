// n의 모든 약수의 합 구하기

function solution(n) {
  var answer = 0;
  var divisors = []
  for(var i=1; i<=n; i++){
      if ( !divisors.includes(i) && n%i == 0 ){
          divisors = divisors.concat(i == parseInt(n/i) ? [i] : [i,parseInt(n/i)] )
      }
  }
  console.log(divisors)
  for(var i=0; i<divisors.length; i++){answer += divisors[i]}
  return answer;
}

