function solution(q, r, code) {
    var answer = '';
    for(let i=0; i<code.length; i++) {
        i%q == r ? answer += code[i] : null
    }
    return answer;
}