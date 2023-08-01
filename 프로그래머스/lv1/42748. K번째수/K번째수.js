function solution(array, commands) {
    var answer = [];
    for(let i=0; i<commands.length; i++) {
        const [s, e, k] = commands[i]
        answer.push(array.slice(s-1,e).sort((a,b)=>a-b)[k-1])
    }
    return answer;
}