function solution(n, stations, w) {
    let answer = 0;
    
    const width = (2*w)+1
    let idx = 1;
    
    stations.forEach(val=>{
        val-w > 0 ? answer+=Math.ceil(((val-w)-idx)/width) : null
        idx = val+w+1
    });
    
    if (idx-1 < n) {
        answer += Math.ceil((n-(idx-1))/width)
    }
    
    return answer;
}
/*
stations, w
*/