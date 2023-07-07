function solution(board) {
    var answer = 0;
    if (board.length==1) {
        return board.flat().filter(v=>!v).length
    }
    for(let i=0; i<board.length; i++) {
        for(let j=0; j<board.length; j++) {
            if (board[i][j] == 1) {
                if (i==0) {
                    if (j==0) {
                        !board[i][j+1] ? board[i][j+1] = 2 : board[i][j+1];
                        !board[i+1][j] ? board[i+1][j] = 2 : board[i+1][j];
                        !board[i+1][j+1] ? board[i+1][j+1] = 2 : board[i+1][j+1];
                    } else if (j==board.length-1) {
                        !board[i][j-1] ? board[i][j-1] = 2 : board[i][j-1];
                        !board[i+1][j-1] ? board[i+1][j-1] = 2 : board[i+1][j-1];
                        !board[i+1][j] ? board[i+1][j] = 2 : board[i+1][j];
                    } else {
                        !board[i][j-1] ? board[i][j-1] = 2 : board[i][j-1];
                        !board[i][j+1] ? board[i][j+1] = 2 : board[i][j+1];
                        !board[i+1][j-1] ? board[i+1][j-1] = 2 : board[i+1][j-1];
                        !board[i+1][j] ? board[i+1][j] = 2 : board[i+1][j];
                        !board[i+1][j+1] ? board[i+1][j+1] = 2 : board[i+1][j+1];
                    }
                } else if (j==0) {
                    if (i==board.length-1) {
                        !board[i-1][j] ? board[i-1][j] = 2 : board[i-1][j];
                        !board[i-1][j+1] ? board[i-1][j+1] = 2 : board[i-1][j+1];
                        !board[i][j+1] ? board[i][j+1] = 2 : board[i][j+1];
                    } else {
                        !board[i-1][j] ? board[i-1][j] = 2 : board[i-1][j];
                        !board[i-1][j+1] ? board[i-1][j+1] = 2 : board[i-1][j+1];
                        !board[i][j+1] ? board[i][j+1] = 2 : board[i][j+1];
                        !board[i+1][j] ? board[i+1][j] = 2 : board[i+1][j];
                        !board[i+1][j+1] ? board[i+1][j+1] = 2 : board[i+1][j+1];
                    }
                } else if (i==board.length-1) {
                    if (j==board.length-1) {
                        !board[i-1][j-1] ? board[i-1][j-1] = 2 : board[i-1][j-1];
                        !board[i-1][j] ? board[i-1][j] = 2 : board[i-1][j];
                        !board[i][j-1] ? board[i][j-1] = 2 : board[i][j-1];
                    } else {
                        !board[i-1][j-1] ? board[i-1][j-1] = 2 : board[i-1][j-1];
                        !board[i-1][j] ? board[i-1][j] = 2 : board[i-1][j];
                        !board[i-1][j+1] ? board[i-1][j+1] = 2 : board[i-1][j+1];
                        !board[i][j-1] ? board[i][j-1] = 2 : board[i][j-1];
                        !board[i][j+1] ? board[i][j+1] = 2 : board[i][j+1];
                    }
                } else if (j==board.length-1) {
                    !board[i-1][j-1] ? board[i-1][j-1] = 2 : board[i-1][j-1];
                    !board[i-1][j] ? board[i-1][j] = 2 : board[i-1][j];
                    !board[i][j-1] ? board[i][j-1] = 2 : board[i][j-1];
                    !board[i+1][j-1] ? board[i+1][j-1] = 2 : board[i+1][j-1];
                    !board[i+1][j] ? board[i+1][j] = 2 : board[i+1][j];
                } else {
                    !board[i-1][j-1] ? board[i-1][j-1] = 2 : board[i-1][j-1];
                    !board[i-1][j] ? board[i-1][j] = 2 : board[i-1][j];
                    !board[i-1][j+1] ? board[i-1][j+1] = 2 : board[i-1][j+1];
                    !board[i][j-1] ? board[i][j-1] = 2 : board[i][j-1];
                    !board[i][j+1] ? board[i][j+1] = 2 : board[i][j+1];
                    !board[i+1][j-1] ? board[i+1][j-1] = 2 : board[i+1][j-1];
                    !board[i+1][j] ? board[i+1][j] = 2 : board[i+1][j];
                    !board[i+1][j+1] ? board[i+1][j+1] = 2 : board[i+1][j+1];
                }
            }
        }
    }
    return board.flat().filter(v=>!v).length;
}