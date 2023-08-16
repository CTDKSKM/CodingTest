function solution(k, m, score) {
    var answer = 0
    const arr = score.slice().sort((a,b)=>a-b)
    for(let i=0; i<Math.floor(score.length/m); i++) {
        const temp = []
        for(let j=0; j<m; j++) {
            temp.push(arr.pop())
        }
        answer += (m * Math.min(...temp))
    }
    return answer;
}