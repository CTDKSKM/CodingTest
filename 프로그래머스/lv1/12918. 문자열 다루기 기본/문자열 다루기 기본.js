function solution(s) {
    var answer = true;
    if (s.length == 6 || s.length == 4) {
        !isNaN([...s].reduce((a,c)=>a-c)) ? answer = true : answer = false
    } else answer = false
    return answer;
}