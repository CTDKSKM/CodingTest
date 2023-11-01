function solution(m, n, puddles) {
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    dp[1][1] = 1;

    for (let puddle of puddles) {
        const [x, y] = puddle;
        dp[x][y] = -1;
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            let val = 0;
            if (i === 1 && j === 1) continue;
            if (dp[i][j] === -1) continue;
            
            if (dp[i - 1][j] !== -1) val += dp[i - 1][j];
            if (dp[i][j - 1] !== -1) val += dp[i][j - 1];
            dp[i][j] += val % 1000000007
        }
    }

    return dp[m][n];
}

/*
좌표에 올수있는 경우의 수. 
왼쪽에서 올수있는 경우
위에서 올수있는 경우
*/