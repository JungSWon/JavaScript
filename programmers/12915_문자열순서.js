function solution( strings, n ) {
  var rule = function(a,b){
      var charA = a[n].charCodeAt(0), charB = b[n].charCodeAt(0)
      if(charA - charB > 0){
          return 1
      }else if(charA - charB < 0){
          return -1 
      }else{
        if([a,b].sort()[0] == [a,b][0]){ 
          return -1}
        else{return 1}
       }
  }
  strings.sort( rule )

  return strings;
}


console.log(solution(['baaaa','caaaa','aaaaa','qaa','qb','ba'] , 1 ))
// console.log(solution(['sun', 'bed', 'car'],1 ))


// 문자열 순서비교 
// 'a'.charCodeAt(0) : 파이썬의 ord('a') 

// ['a','b'].sort() == ['a','b']  : 보기엔 true 이지만 다른 객체라그런지 무조건 false가 나옴 
//  ['a','b'].sort()[0] == ['a','b'][0] : 'a' == 'a' 로 true 가 나와서 꼼수로 대체함 

// 'qwe' - 'wer' : 문자열 - 문자열 : NaN 
