function solution(players, callings) {
    const memo = {};
    players.forEach((player, idx) => memo[player] = idx)
    
    callings.forEach(player=>{
        const idx = memo[player]
        const temp = players[idx]
        players[idx] = players[idx-1]
        players[idx-1] = temp
        memo[player]--
        memo[players[idx]]++
    })
    return players;
}