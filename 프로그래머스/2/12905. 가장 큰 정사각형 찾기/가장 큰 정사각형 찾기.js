function solution(board) {
    const rows = board.length;
    const cols = board[0].length;
    
    if (rows == 1 || cols == 1) return 1;
    
    let maxSize = 0;
    
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            if (board[i][j] == 0) continue
            
            board[i][j] = Math.min(board[i-1][j], board[i][j-1], board[i-1][j-1]) + 1;
            
            maxSize = Math.max(maxSize, board[i][j]);
        }
    }
    
    return maxSize * maxSize;
}
