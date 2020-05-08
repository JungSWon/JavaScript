# 시간초과,, 

def permutation(n):
  perm_li, cnadi_num = [] ,['1','3','4']
  target_num, isContinue = 0, True 
  while isContinue: 
    target_num += 1

    num_li = [] 
    Q, cnt = [] , 0
    Q.append( ( cnt,num_li ) )
    while Q :
      if n == 0: 
        isContinue = False
        break
      cnt , num_li = Q.pop(0)
      if cnt == target_num :
        perm_li.append(num_li)
        n -= 1
        continue
      for num in range(3):
          Q.append( (cnt+1, num_li+[ cnadi_num[num] ]))
  return perm_li 

def solution(n):
    return ''.join(permutation(n)[-1])
    

solution(7)