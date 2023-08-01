function solution(n) {
    var answer = 0;
    const binaryNsLen = n.toString(2).split('').filter(v=>v==1).length
    for(let i=n+1; answer==0; i++) {
        i.toString(2).split('').filter(v=>v==1).length == binaryNsLen ? answer += i : false
    }
    return answer;
}