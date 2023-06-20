function solution(numbers, k) {
    var answer = 0;
    let oddNums = numbers.filter((num,idx)=>idx%2==0)
    let evenNums = numbers.filter((num,idx)=>idx%2==1)
    if (numbers.length%2 == 0) {
        let newK = k%numbers.length
        if (newK==0) {
            answer = oddNums[oddNums.length-1]
        } else {
            newK > oddNums.length ? answer = oddNums[newK%oddNums.length-1] : answer = oddNums[newK-1]
        }
    } else {
        let newK = k%numbers.length
        if (newK > oddNums.length) {
            answer = evenNums[newK%oddNums.length-1]
        } else if (newK == 0) {
            answer = evenNums[evenNums.length-1]
        } else {
            answer = oddNums[newK-1]
        }
    }
    return answer;
}