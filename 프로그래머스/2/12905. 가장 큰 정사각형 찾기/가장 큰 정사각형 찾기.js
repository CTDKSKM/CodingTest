function solution(board) {
    const rows = board.length;
    const cols = board[0].length;
    
    if (rows == 1 || cols == 1) return 1;
    
    let maxSize = 0;
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (i == 0 || j == 0 || board[i][j] == 0) continue
            
            board[i][j] = Math.min(board[i-1][j], board[i][j-1], board[i-1][j-1]) + 1;
            
            maxSize = Math.max(maxSize, board[i][j]);
        }
    }
    
    return maxSize * maxSize;
}
