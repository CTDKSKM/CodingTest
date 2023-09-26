function solution(n) {
    let answer = 1;
    for (let i = 3; i <= n; i += 2) {
        let isPrime = true;
        for (let j = 3; j * j <= i; j += 2) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }   
        if (isPrime) {
            answer++;
        }
    }

    return answer;
}