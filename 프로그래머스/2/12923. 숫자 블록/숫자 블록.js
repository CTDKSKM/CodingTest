function solution(begin, end) {
    const answer = [];
    
    const isPrime = (num) => {
        if (num <= 1) return false;
        if (num === 2) return true;
        const sqrt = Math.sqrt(num);
        for (let i = 2; i <= sqrt; i++) {
            if (num % i === 0) return false;
        }
        return true;
    };
    
    const get = (num) => {
        if (num === 1) return 0
        if (isPrime(num)) return 1
        
        const temp = [];
        
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {  // num이 i로 나누어 떨어진다면 (즉, i가 약수라면)
                if (num / i <= 10000000) {
                    return num / i
                }
                else temp.push(i)
            }
        }
        
        return temp.at(-1);
    }

    for (let i = begin; i <= end; i++) {
        const num = get(i);
        answer.push(num);
    }

    return answer;
}