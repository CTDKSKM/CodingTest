function solution(n) {
    var answer = n%2 ? 1 : 0;
    for(let i = 1 ; i <= n/2; i+=2) {
        n%i==0 ? answer++ : false
    }
    return answer;
}
