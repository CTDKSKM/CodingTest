function solution(n) {
    var answer = 0;
    let i = 0;
    for(answer; i<n; answer++) {
        if (answer.toString().includes('3') || answer%3 == 0) continue
        i++
    }
    return answer-1;
}