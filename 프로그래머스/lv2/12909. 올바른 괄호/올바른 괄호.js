function solution(s){
    var answer = true;
    s.split('').map(item=>item==='(' ? 1 : -1).reduce((acc,cur)=>{
        if (acc === -1) answer = false 
        return acc + cur
    }) !== 0 ? answer = false : null

    return answer
}