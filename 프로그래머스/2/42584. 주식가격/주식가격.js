function solution(prices) {
    var answer = [];
    for(let i=0; i<prices.length; i++) {
        let sec = 0;
        let flag = 0;
        for(let j=i; j<prices.length; j++) {
            if (prices[i] > prices[j]) {
                flag = 1;
                break
            }
            else sec++
        }
        flag ? answer.push(sec) : answer.push(sec-1)
    }
    return answer;
}

/*

*/