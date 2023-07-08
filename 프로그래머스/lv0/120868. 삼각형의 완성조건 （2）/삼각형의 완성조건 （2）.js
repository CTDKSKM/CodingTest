function solution(sides) {
    const mark = Math.abs(sides[0] - sides[1])
    if (mark === 1) return 1
    let answer = 0;
    for(let i = Math.max(...sides)+1 ; i<sides[0]+sides[1]; i++) {
        answer++
    }
    for(let i=mark+1; i<=Math.max(...sides); i++) {
        answer++
    }
    
    return answer;
}