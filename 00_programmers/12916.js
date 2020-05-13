
function solution(s){
  var answer = false;
  var cntp = 0 , cnty = 0;
  for(var i=0; i < s.length; i++){
      if (s[i] =='p' || s[i] == 'P'){
          cntp += 1;
      }else if(s[i] == 'y' || s[i] =='Y'){
          cnty += 1;
       }
  }
  if(cntp == cnty){
     answer = true;
     }
     return answer;
}

solution("PyY")
