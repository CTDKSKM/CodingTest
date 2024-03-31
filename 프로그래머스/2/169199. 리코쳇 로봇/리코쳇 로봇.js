function solution(board) {    
    const dp = Array.from({length: board.length}, ()=>Array(board[0].length).fill(Infinity))

    let start_row = board.findIndex(v=>v.indexOf("R") > -1)
    let start_col = board[start_row].indexOf("R")
    
    dp[start_row][start_col] = 0
        
    //상하좌우
    const dr = [-1, 1, 0, 0]
    const dc = [0, 0, -1, 1]
    
    const stack = [[start_row, start_col]]
    while(stack.length) {
        const [n_r, n_c] = stack.pop()
        
        for(let i=0; i<4; i++) {
            let nextR = n_r + dr[i]
            let nextC = n_c + dc[i]
            if (nextR < 0 || nextR >= board.length || nextC < 0 || nextC >= board[0].length || board[nextR][nextC] === 'D') continue

            while(nextR + dr[i] >= 0 && nextR + dr[i] < board.length && nextC + dc[i] >= 0 && nextC + dc[i] < board[0].length && board[nextR+dr[i]][nextC+dc[i]] !== "D") {
                nextR += dr[i];
                nextC += dc[i];
            }

            if (dp[nextR][nextC] > dp[n_r][n_c] + 1) {
                stack.push([nextR, nextC])
                dp[nextR][nextC] = dp[n_r][n_c] + 1
            }
        }
    }
    const g_R = board.findIndex(v=>v.indexOf("G") > -1)
    const g_C = board[g_R].indexOf('G')
    
    return dp[g_R][g_C] !== Infinity ? dp[g_R][g_C] : -1;
}