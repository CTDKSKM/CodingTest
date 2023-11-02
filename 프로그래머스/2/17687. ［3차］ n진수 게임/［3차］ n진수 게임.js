function solution(n, t, m, p) {
    let str = '';
    const answer = []
    for(let i=0; i<=t*m; i++) {
        str += i.toString(n).toUpperCase()
    }
    for(let i=p-1; i<t*m; i+=m) {
        answer.push(str[i])
    }
    return answer.join('');
}