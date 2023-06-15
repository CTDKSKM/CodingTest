function solution(my_string, s, e) {
    let newStr = [...my_string.slice(s,e+1)].reverse().join('')
    return my_string.slice(0, s) + newStr + my_string.slice(e+1);
}