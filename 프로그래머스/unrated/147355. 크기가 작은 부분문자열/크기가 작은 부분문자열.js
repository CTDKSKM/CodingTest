function solution(t, p) {
    var answer = 0;
    for(let i=0; i<=t.length-p.length; i++) {
        +t.slice(i, p.length+i) <= +p ? answer++ : false
    }
    return answer;
}