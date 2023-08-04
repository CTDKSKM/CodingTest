function solution(n) {
    var answer = [1, 2]
    for(let i=2; i<n; i++) {
        const cur = (answer[i-2] + answer[i-1])%1234567
        answer.push(cur)
    }
    return answer[n-1]
}