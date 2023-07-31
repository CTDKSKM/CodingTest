function solution(l, r) {
    var answer = [];
    for(let i=l; i<=r; i++) {
        let temp = i.toString()
        temp.replaceAll('0', '').replaceAll('5','').length ? false : answer.push(i)
    }
    return answer.length ? answer : [-1];
}