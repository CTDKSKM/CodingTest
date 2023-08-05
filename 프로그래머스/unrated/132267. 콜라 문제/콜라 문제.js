function solution(a, b, n) {
    return Math.floor(Math.max(n - b, 0) / (a - b)) * b
}