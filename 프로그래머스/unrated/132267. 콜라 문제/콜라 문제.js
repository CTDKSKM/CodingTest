function solution(a, b, n) {
    var answer = 0;
    let empties = n
    while (empties>=a) {
        const trades = Math.floor(empties/a)
        empties = empties % a + trades*b
        answer += trades*b
    }
    return answer;
}