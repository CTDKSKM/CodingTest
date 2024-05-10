function solution(board) {
    const N = board.length;
    
    const DIRECTION = [[1,0], [-1,0], [0,1], [0,-1]]
    const dp = Array(N).fill().map(() => Array(N).fill().map(() => Array(4).fill(Infinity)));
    
    const isValid = (x, y) => x >= 0 && x < N && y >= 0 && y < N && board[x][y] !== 1;

    const q = [[0, 0, 0, 0], [0, 0, 0, 2]]
    
    while ( q.length ) {
        const [x, y, cost, dir] = q.shift();
        
        for(let i=0; i<4; i++) {
            const [mx, my] = DIRECTION[i];
            const [nx, ny] = [x+mx, y+my];
            let newCost = cost + 100;

            if (!isValid(nx,ny)) continue;
            
            if (dir !== i) newCost += 500;
           
            if (newCost < dp[nx][ny][i]) {
                dp[nx][ny][i] = newCost;
                q.push([nx, ny, newCost, i]);
            }
        }
    }
    
    return Math.min(...dp[N-1][N-1]);
}