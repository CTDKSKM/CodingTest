function solution(s) {
    let arrS = s.split(' ')
    return arrS.reduce((acc,cur,idx)=>{
        if (cur == 'Z') {
            return acc -= +arrS[idx-1]
        } else return acc += +cur
    }, 0);
}