function solution(n, money) {
    const dp = Array.from({length: n+1}, ()=>0)
    dp[0] = 1

    money.forEach(coin=>{
        for(let i=coin; i<=n; i++) {
            dp[i] += dp[i-coin]
        }
    })
    
    return dp[n]
}