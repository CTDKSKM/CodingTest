function solution(number) {
    var answer = 0;
    for(let i=0; i<number.length-2; i++) {
        for(let j=i+1; j<number.length-1; j++) {
            for(let k=j+1; k<number.length; k++) {
                const temp = number[i] + number[j] + number[k]
                temp == 0 ? answer++ : false
            }
        }
    }
    return answer;
}
