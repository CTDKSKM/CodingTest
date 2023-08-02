function solution(common) {
    const d = [];
    const len = common.length;
    for(let i=0; i<2; i++) {
        d.push(common[i]-common[i+1]);
    }
    if (d[0] == 0) return common[0]
    else if (d[0] == d[1]) return common[len-1] + -d[0]
    else return common[len-1]*(d[1]/d[0])
}