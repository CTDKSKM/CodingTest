function solution(n, s, a, b, fares) {
    const graph = {};
    const fromS = Array(n+1).fill(Infinity)
    fares.forEach(([from, to, fare])=>{
        graph[from] = graph[from] || [];
        graph[to] = graph[to] || [];
        graph[from].push({node:to, fare})
        graph[to].push({node:from, fare})
    })
    const q = [{node:s, fare:0}]
    fromS[s] = 0
    
    //S에서 각 지점으로 가는 최소 비용 구하기.
    calc(q, fromS, graph)
    
    //각 지점에서 A, B로 가는 최소비용 구하기
    let ret = Infinity
    fromS.map((fare,idx)=>({node:idx, fare})).filter(v=>v.fare !== Infinity).forEach(({node, fare})=>{
        const toDest = Array(n+1).fill(Infinity)
        const q = [{node, fare}]
        toDest[node] = fare
        
        calc(q, toDest, graph)
        
        ret = Math.min(ret, toDest[a]+toDest[b]-fare)
    })
    return ret;
}
function calc(q, dp, graph) {
    while(q.length) {
        const {node:from, fare:f_fare} = q.shift()
        graph[from].forEach(({node:to, fare:t_fare})=>{
            if (dp[to] > t_fare + f_fare) {
                dp[to] = t_fare+f_fare
                q.push({node:to, fare:dp[to]})
            }
        })
    }
}
/*
S에서 각 지점으로 가는 최소 비용 + 각 지점에서 A, B로 가는 최소 비용
*/