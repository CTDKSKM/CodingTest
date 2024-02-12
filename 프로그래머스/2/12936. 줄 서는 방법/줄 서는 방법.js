function solution(n, k) {
    const answer = []
    const arr = Array(n).fill(0).map((_,idx)=>idx+1)
    
    while (n > 0) {
        const divide = factorial(n-1)
        const target = Math.ceil(k/divide)
        answer.push(arr.splice(target-1,1)[0])
        k = k % divide
        n--
    }

    return answer;
}
function factorial(n) {
    let ret = 1;
    for (let i = 2; i <= n; i++) {
        ret *= i;
    }
    return ret;
}
