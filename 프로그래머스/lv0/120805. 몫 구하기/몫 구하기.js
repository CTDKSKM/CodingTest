function solution(num1, num2) {
    var answer = 0;
    for (let i = 1; num1 >= num2; i++) {
        num1 -= num2
        answer = i
    }
    return answer;
}