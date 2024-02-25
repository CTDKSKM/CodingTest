function solution(friends, gifts) {
    const d1 = {}
    const d2 = {}
    friends.forEach(v=>{
        d1[v] = 0
        d2[v] = friends.map(receiver=>([receiver,0]))
    })
    
    gifts.forEach(rec=>{
        const [giver, receiver] = rec.split(' ')
        d1[giver]++
        d1[receiver]--
        const r_i = d2[giver].findIndex(([v])=>receiver==v);
        d2[giver][r_i][1]++
    })
    
    let max = 0
    for(let i = 0; i < friends.length; i++) {
        const u1 = friends[i]
        let temp = 0
        friends.filter(g=>g!=u1).forEach((u2,idx)=>{
            const l = d2[u1].filter(([v,n])=>v==u2)[0][1]
            const r = d2[u2].filter(([v,n])=>v==u1)[0][1]
            const l2 = d1[u1]
            const r2 = d1[u2]
            l > r ? temp++ : l == r ? l2 > r2 ? temp++ : null : null
        
        })
    
        max = Math.max(max, temp)
    }
    return max;
}
//두 사람 사이에 더 많은 선물을 준 사람이 다음 달에 선물을 하나 받습니다. 같다면 선물 지수가 더 큰 사람이 선물 지수가 더 작은 사람에게 선물을 하나 받습니다.선물을 가장 많이 받을 친구가 받을 선물의 수 리턴.