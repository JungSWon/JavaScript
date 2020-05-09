// 사전적 위치 비교 

// 문자열.localeCompare(비교문자열)
  // 기준문자열이 앞서있다면 -1 (또는 음수) 
  // 기준문자열이 뒤에있다면 1 (또는 양수)
  // 같다면 0 
console.log('a'.localeCompare('z')) // -1
console.log('z'.localeCompare('a')) // 1
console.log('ㄱ'.localeCompare('ㄱ')) // 0

console.log('ㄱㄴㄷ'.localeCompare('ㄱㅎ')) // -1


// 참고 : 이 메소드로 조건을 걸 때, 하지말아야 할것
  // 결과가 -1 이라면 || 결과가 1 이라면 
// 옳은 활용 =>  결과가 음수라면 || 결과가 양수라면 
