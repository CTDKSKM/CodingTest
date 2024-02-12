function solution(n, k) {
    const answer = []
    const arr = Array(n).fill(0).map((_,idx)=>idx+1)
    const len = n
    
    while (answer.length !== len) {
        const devide = p(n) / n
        const target = Math.ceil(k/devide)
        answer.push(arr.splice(target-1,1)[0])
        if (k > devide) k = k % devide
        n--
    }

    return answer;
}
function p(n, d = 1) {
    if (n < 2) return d
    return p(n-1, d*n)
}
