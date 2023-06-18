function solution(n) {
    var answer = [];
    for(let i=2; i<=n; i++) {
        if (n%i == 0) {
            if (answer.indexOf(i) == -1) {
                answer.push(i)
                n = n/i
                i = 1
            } else {
                n = n/i
                i = 1
            }
        }
    }
    return answer;
}