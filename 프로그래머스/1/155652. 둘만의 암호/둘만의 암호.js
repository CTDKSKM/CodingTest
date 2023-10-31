function solution(s, skip, index) {
    let answer = '';
    let alp = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'
    for(let i=0; i<skip.length; i++) {
        alp = alp.replaceAll(skip[i], '')
    }
    for(let i=0; i<s.length; i++) {
        answer += alp[alp.indexOf(s[i])+index]
    }
    return answer;
}