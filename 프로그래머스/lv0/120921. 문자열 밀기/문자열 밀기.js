function solution(A, B) {
    if (A == B) return 0;
    var answer = []
    const temp = A.repeat(2)
    for(let i=0; i<A.length; i++) {
        answer.push(temp.slice(i,A.length+i))
    }
    return answer.includes(B) ? answer.length - answer.lastIndexOf(B) : -1;
}