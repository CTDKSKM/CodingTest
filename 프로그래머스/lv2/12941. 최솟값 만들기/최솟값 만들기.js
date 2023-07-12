function solution(A,B){
    var answer = 0;
    const sortedA = A.sort((a,b)=>b-a)
    const sortedB = B.sort((a,b)=>a-b)
    for(let i = 0; i<A.length; i++) {
        answer += sortedA[i] * sortedB[i]
    }

    return answer;
}