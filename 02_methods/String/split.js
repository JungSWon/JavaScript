// 문자열을 문자열 기준으로 쪼개서 배열에 담기

str = 'qwe,asd,zxc,123'
res1 = str.split(',')
res2 = str.split(',', 2)
console.log(res1) // Array(4) ["qwe", "asd", "zxc", "123"]
console.log(res2) // Array(2) ["qwe", "asd"]

