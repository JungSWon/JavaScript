
a = 'qweqweqwe'


// indexOf(검색문자열)
// indexOf(검색문자열,검색시작인덱스)
  // return 최초 발견 인덱스

res1 = a.indexOf('qwe')    // 0
res2 = a.indexOf('qwe',2)  // 3

console.log(res1, res2)

// lastIndexOf(검색문자열)
// lastIndexOf(검색문자열,검색시작인덱스)
  // return 마지막 발견 인덱스

res3 = a.lastIndexOf('qwe')    // 6
res4 = a.lastIndexOf('qwe',2)  // 0
res5 = a.lastIndexOf('qwe',6)  // 6

console.log(res3, res4, res5)


var stringName = 'coding everybody everywhere';
console.log(stringName.indexOf('every'));
console.log(stringName.lastIndexOf('every'));