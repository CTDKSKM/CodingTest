function solution(s, n) {
    const upperAlp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerAlp = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';
    const answer = [];

    for(let i=0; i<s.length; i++) {
        if (s[i] != ' ') {
            if (upperAlp.includes(s[i])) {
                answer.push(upperAlp[upperAlp.indexOf(s[i])+n]);
            } else {
                answer.push(lowerAlp[lowerAlp.indexOf(s[i])+n]);
            }
        } else answer.push(' ')
    }

    return answer.join('');
}