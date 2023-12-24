function solution(A, B) {
    let answer = 0;
    A.sort((a,b)=>a-b)
    B.sort((a,b)=>a-b)

    let b_i = B.length-1;
    for(let i=A.length-1; i>=0; i--) {
        if (B[b_i ] > A[i]) {
            answer++;
            b_i--;
        }
    }
    return answer;
}