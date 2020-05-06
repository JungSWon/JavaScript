function solution(a, b) {
  var answer = '';
  var daysInM = {1:31, 2:29, 3:31, 4:30, 5:31, 6:30, 7:31, 8:31, 9:30, 10:31, 11:30, 12:31 } ;
  var days = 0;
  var weekdays = ['THU','FRI','SAT','SUN','MON','TUE','WED']
  for(var m = 1 ; m < a ; m++ ){
      days += daysInM[m]
  }
  days += b
  answer = weekdays[days%7]
  return answer;
}
solution(5,24) //"TUE"