// Concatenation : 접합
// str.concat(str1, str2 )
// str.concat(str1, str2, [str3, str4] )

str = 'STR'
str1 = 'STR!'
str2 = 'STR@'
str_arr = ['STR#','STR$','STR%','STR^']

strstr = str.concat(str)
new_str = str.concat(str1, str2)
concat_str_arr = str.concat(str1,str_arr, ['tempStr',str2] )

console.log(str) // STR 원본은 그대로
console.log(strstr) // STRSTR
console.log(new_str) // STRSTR!STR@
console.log(concat_str_arr) //STRSTR!STR#,STR$,STR%,STR^tempStr,STR@

// arr 요소 간 ',' 찍히는게 싫다면
concat_str_arr_join = str.concat(str1,str_arr.join(''), ['tempStr',str2].join('') )
console.log(concat_str_arr_join) //STRSTR!STR#STR$STR%STR^tempStrSTR@
