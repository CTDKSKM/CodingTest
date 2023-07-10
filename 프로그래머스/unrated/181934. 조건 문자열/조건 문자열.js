function solution(ineq, eq, n, m) {
    var answer = 0;
    if (ineq === ">") {
        if (eq === "=") answer = n >= m
        else answer = n>m
    } else {
        if (eq === "=") answer = n <= m
        else answer = n<m
    }
    return answer ? 1 : 0;
}