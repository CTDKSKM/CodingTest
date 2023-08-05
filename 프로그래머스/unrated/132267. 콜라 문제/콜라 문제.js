function solution(a, b, n) {
    var answer = 0;
    let empties = n
    while (empties>=a) {
        const tradeRatio = Math.floor(empties/a)
        empties %= a
        answer += tradeRatio*b
        empties += tradeRatio*b
    }
    return answer;
}