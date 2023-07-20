function solution(num, total) {
    var answer = [];
    if (num%2) {
        for(let i=0; i<num; i++) {
            answer.push(total/num-(num-1)/2+i)
        }
    } else {
        for(let i=0; i<num; i++) {
            answer.push(Math.ceil(total/num)-(num/2)+i)
        }
    }
    return answer
}