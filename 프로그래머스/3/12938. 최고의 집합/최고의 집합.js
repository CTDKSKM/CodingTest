function solution(n, s) {
    if (n > s) return [-1]
    const answer = [];
    while(n) {
        const 몫 = Math.floor(s/n)
        n--
        s -= 몫
        answer.push(몫)
    }
    return answer;
}