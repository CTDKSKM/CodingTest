function solution(board) {
    let max = 0;
    let x = board.length;
    let y = board[0].length;

    if(x<=1 || y<=1) return Math.max(board.flat(Infinity));

    for(let i=1; i<x; i++){
        for(let j=1; j<y; j++){
            if(board[i][j] >= 1){
                let min = Math.min(board[i-1][j], board[i-1][j-1], board[i][j-1]);

                board[i][j] = min+1;
                max = Math.max(max, min+1);
            }
        }
    }

    return max*max;
}
