function solution(A, B) {
    let answer = 0;
    A.sort((a,b)=>a-b)
    B.sort((a,b)=>a-b)
    const stack = [];
    let s_i = 0;
    for(let i=B.length-1; i>=0; i--) {
        if (B[i] > A[i]) answer++
        else {
            if (stack[s_i] > A[i]) {
                answer++
                s_i++
            }
            stack.push(B[i])
        }
    }
    return answer;
}