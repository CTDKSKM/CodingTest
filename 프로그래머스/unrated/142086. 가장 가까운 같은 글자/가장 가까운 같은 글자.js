function solution(s) {
    var answer = [];
    for(let i = 0; i< s.length; i++) {
        const temp = s.slice(0,i)
        if (temp.includes(s[i])) {
            answer.push(i - temp.lastIndexOf(s[i]))
        } else answer.push(-1)
    }
    return answer;
}