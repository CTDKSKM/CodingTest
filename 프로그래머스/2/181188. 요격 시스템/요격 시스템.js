function solution(targets) {
    var answer = 0;
    let locate = -Infinity
    targets.sort((a,b)=>a[1]-b[1])
    targets.forEach(([s,e])=>{
        if (locate <= s) {
            answer++
            locate = e
        }
    })
    return answer;
}