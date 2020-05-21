// 문자열에서 특정 구간의 문자열 추출

str = '01234567'
res1 = str.substr(3,5) //34567
res2 = str.substr(4,2) //45
res3 = str.substr(2)   //234567
res4 = str.substr(-5)  //34567
res5 = str.substr(-5,2)//34
res6 = str.substr(2,2) //23
res7 = str.substr(4,4) //4567

console.log(res1,'res1')
console.log(res2,'res2')
console.log(res3,'res3')
console.log(res4,'res4')
console.log(res5,'res5')
console.log(res6,'res6')
console.log(res7,'res7')
