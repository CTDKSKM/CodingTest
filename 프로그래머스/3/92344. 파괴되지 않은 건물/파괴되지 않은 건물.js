function solution(board, skill) {
    let answer = 0;
    
    const row = board.length;
    const col = board[0].length;
    const sum = new Array(row+1).fill().map(_=>new Array(col+1).fill(0));
    
    skill.forEach(([t, r1, c1, r2, c2, d])=>{
        const v = t == 1 ? d : -d;
        sum[r1][c1] -= v;
        sum[r1][c2+1] += v;
        sum[r2+1][c1] += v;
        sum[r2+1][c2+1] -= v;
    })
    
    for(let i=0; i<sum.length; i++) {
        for(let j=1; j<sum[0].length; j++) {
            sum[i][j] += sum[i][j-1];
        }
    }
    
    for(let i=1; i<sum.length; i++) {
        for(let j=0; j<sum[0].length; j++) {
            sum[i][j] += sum[i-1][j];
        }
    }
    
    for(let i=0; i<row; i++) {
        for(let j=0; j<col; j++) {
            if (board[i][j] + sum[i][j] > 0) answer++
        }
    }
    
    return answer;
}

