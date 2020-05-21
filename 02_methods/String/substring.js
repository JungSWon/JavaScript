// 문자열에서 특정 구간의 문자열 추출

str = '01234567'
res1 = str.substring(3,5) //34
res2 = str.substring(4,2) //23
// length를 지정하지 않으면 start부터 문자열 전체를 처리
res3 = str.substring(2)   //234567
// length를 지정하지 않고, start가 음수라면 전체를 처리
res4 = str.substring(-2)  //01234567
res5 = str.substring(-5,2)//01
res6 = str.substring(2,2) //
res7 = str.substring(4,4) //

console.log(res1,'res1')
console.log(res2,'res2')
console.log(res3,'res3')
console.log(res4,'res4')
console.log(res5,'res5')
console.log(res6,'res6')
console.log(res7,'res7')