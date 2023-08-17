function solution(progresses, speeds) {
    var answer = [];
    for (let i=0; progresses.length > 0; i++) {
        progresses = progresses.map((v,idx)=>v+=speeds[idx])
        let temp = 0;
        while (progresses[0] >= 100) {
            progresses.shift()
            speeds.shift()
            temp++
        }
        temp != 0 ? answer.push(temp) : false
    }
    return answer;
}