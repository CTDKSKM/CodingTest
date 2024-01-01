function solution(sticker) {
    if (sticker.length === 1) return sticker[0]
    
    const dp = Array.from({length: sticker.length}, (_,idx)=>sticker[idx])
    dp[0] = sticker[0];
    dp[1] = Math.max(sticker[0], sticker[1]);
    
    for(let i=2; i<sticker.length-1; i++) {
        dp[i] = Math.max(dp[i-1], dp[i-2] + dp[i])
    }
    
    const dp2 = Array.from({length: sticker.length}, (_,idx)=>sticker[idx])
    dp2[0] = 0;
    dp2[1] = sticker[1]; 
    
    for(let i=2; i<sticker.length; i++) {
        dp2[i] = Math.max(dp2[i-1], dp2[i-2] + dp2[i])
    }
    
    return Math.max(dp[sticker.length-2], dp2[sticker.length-1])
}