function solution(n, k) {
    const answer = []
    const arr = Array(n).fill(0).map((_,idx)=>idx+1)
    const len = n
    
    while (answer.length !== len) {
        const divide = factorial(n) / n
        const target = Math.ceil(k/divide)
        answer.push(arr.splice(target-1,1)[0])
        if (k > divide) k = k % divide
        n--
    }

    return answer;
}
function factorial(n, ret = 1) {
    if (n < 2) return ret
    return factorial(n-1, ret*n)
}
