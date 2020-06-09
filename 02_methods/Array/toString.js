// 배열의 원소들을 합쳐 문자열로 리턴

arrNum = [1,2,3]
arrStr = ['q','w','e']

res1 = arrNum.toString()
res2 = arrStr.toString()
console.log(arrNum, arrStr) // 원본은 바뀌지 않는다
console.log(res1, res2) // 1,2,3 q,w,e


//prototype을 이용하면 객체의 toSting을 재정의(overriding)할 수 있다
Array.prototype.toString = function(){
  var str = ''
  for(var i= 0; i < this.length-1; i++){
    str += this[i] + '&'
  }
  return str + this[this.length-1]
}
console.log(arrStr.toString()) //q&w&e