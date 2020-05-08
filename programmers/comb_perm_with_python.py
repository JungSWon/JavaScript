# 파이썬 소합/순열 기본 알고리즘 풀이코드 
# 참고하자 

# 조합 
def combination(total_num, target_num):
  comb_set , num_set = set() , set() 
  Q, cnt = [] , 0 
  Q.append( (cnt, num_set) )
  while Q : 
    cnt , num_set = Q.pop(0)
    if cnt == target_num : 
      comb_set.add(tuple(num_set))
      continue
    for num in range(total_num):
      if num not in num_set : 
        Q.append( (cnt+1, num_set | {num}) )
  return list(comb_set)

print(combination(5,3))


# 순열 
def permutation(total_num, target_num):
  perm_li, num_li = [],[] 
  Q, cnt = [] , 0
  Q.append( ( cnt,num_li ) )
  while Q :
    cnt , num_li = Q.pop(0)
    # if cnt == total_num : # 조건에 따라 target_num 사용
    if cnt == target_num :
      perm_li.append(num_li)
      continue
    for num in range(total_num):
      if num not in num_li : # 중복순열이라면 조건 없이
        Q.append( (cnt+1, num_li+[num]))
  return perm_li 

print(permutation(5,2))