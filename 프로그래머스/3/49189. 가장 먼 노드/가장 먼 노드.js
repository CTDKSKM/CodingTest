function solution(n, edge) {
    const graph = {}
    edge.forEach(([a, b]) => {
        graph[a] = graph[a] || []
        graph[b] = graph[b] || []
        graph[a].push({node:b})
        graph[b].push({node:a})
    })
    const dp = Array(n+1).fill(50000)
    const queue = [{node:1, dist:0}]
    let max = 0;
    while (queue.length) {
        const {node, dist} = queue.shift()

        graph[node].forEach(({node:next})=>{
            if (dp[next] > dist+1) {
                dp[next] = dist+1
                queue.push({node:next, dist:dp[next]})
                max = Math.max(max, dp[next])
            }
        })

    }
    dp[1] = 0

    return dp.filter(v=>v===max).length;
}