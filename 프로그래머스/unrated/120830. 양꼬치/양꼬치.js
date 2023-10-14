function solution(n, k) {
    let a = Math.floor(n/10)
    var answer = (n * 12000) + (k * 2000) - (a * 2000)
    return answer;
}