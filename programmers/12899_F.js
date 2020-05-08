// 요소 ['1','2','4'] 로 이루어진  n 번 째 중복순열 찾기 

// 시간초과 
function permutation( n ){
  var candi_num = [1,2,4]
  var perm_li = []
  var target_num = 0, isContinue = true;
  while( isContinue == true ) {
    target_num ++ ; 
    var num_li = []
    var Q = [], cnt = 0, perm_lng = 0 ;
    Q.push( [cnt,num_li] )
    while(Q.length > 0 && isContinue == true ){
      if(perm_lng == n){ isContinue=false; break; }
      var Qpop = Q.shift() 
      cnt = Qpop[0] , num_li = Qpop[1]
      if(cnt == target_num){
        perm_li.push(num_li);
        perm_lng++;
        continue
      }
      for(var num = 0 ; num < 3; num++ ){
        Q.push( [cnt+1, num_li.concat([ candi_num[num] ]) ] )
      }
    }
  }return perm_li 
}


function solution(n) {
  console.log(permutation(n), permutation(n)[n-1].join(''))
  return permutation(n)[n-1].join('')
}

solution(7)


