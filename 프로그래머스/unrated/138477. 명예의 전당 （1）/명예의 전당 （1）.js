function solution(k, score) {
    var answer = [];
    const hof = []
    for(let i=0; i<k && i<score.length; i++) {
        hof.push(score[i])
        hof.sort((a,b)=>a-b)
        answer.push(hof[0])
    }
    for(let i=k; i<score.length; i++) {
        for(let j=0; j<hof.length; j++) {
            if (score[i] > hof[j]) {
                hof[j] = score[i]
                hof.sort((a,b)=>a-b)
                break
            }
        }
        answer.push(hof[0])
    }
    return answer;
}