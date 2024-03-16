function solution(n, s, a, b, fares) {
    const graph = {};
    fares.forEach(([from, to, fare])=>{
        graph[from] = graph[from] || [];
        graph[to] = graph[to] || [];
        graph[from].push({node:to, fare})
        graph[to].push({node:from, fare})
    })

    //S에서 각 지점으로 가는 최소 비용 구하기.
    const fromS = calc(s, 0, graph, n)

    //각 지점에서 A, B로 가는 최소비용 구하기
    let ret = Infinity
    fromS.map((fare,idx)=>({node:idx, fare})).filter(v=>v.fare !== Infinity).forEach(({node, fare})=>{
        const toDest = calc(node, fare, graph, n)

        ret = Math.min(ret, toDest[a]+toDest[b]-fare)
    })
    
    return ret
}
function calc(node, fare, graph, n) {
    const dp = Array(n+1).fill(Infinity)
    dp[node] = fare
    const q = [{node, fare}]
    while(q.length) {
        const {node:from, fare:f_fare} = q.shift()
        graph[from].forEach(({node:to, fare:t_fare})=>{
            if (dp[to] > t_fare + f_fare) {
                dp[to] = t_fare+f_fare
                q.push({node:to, fare:dp[to]})
            }
        })
    }
    return dp
}