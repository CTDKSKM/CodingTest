function solution(code) {
    var answer = '';
    let mode = false;
    [...code].map((v,idx)=>{
        if (v == 1) mode = !mode
        else if (mode && idx%2 == 1) answer += v
            
        else if (!mode && idx%2 == 0) answer += v
    })
    return answer?answer: 'EMPTY';
}