function solution(bin1, bin2) {
    var answer = '';
    let compare = bin1.length > bin2.length ? bin1.length : bin2.length
    let result = 0;
    for(let i=0; i<bin1.length; i++) {
        +bin1[i] ? result += Math.pow(2,bin1.length-i-1) : false
    }
    for(let i=0; i<bin2.length; i++) {
        +bin2[i] ? result += Math.pow(2,bin2.length-i-1) : false
    }
    for(let i=compare; i>=0; i--) {
        if (result / Math.pow(2,i) >= 1) {
            answer += '1';
            result -= Math.pow(2,i)
        } else answer += '0'
    }
    
    return !+answer[0] ? answer.slice(1) : answer;
}