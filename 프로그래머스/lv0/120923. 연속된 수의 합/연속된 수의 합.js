function solution(num, total) {
    let x = ((2*total/num)+1-num)/2
    let answer=[];
    for(let i = 0; i<num;i++){
        answer.push(x+i)
    }
    return answer;
}