function solution(N, road, K) {
    const graph = {};
    road.forEach(([a, b, cost]) => {
        graph[a] = graph[a] || [];
        graph[b] = graph[b] || [];
        graph[a].push({ node: b, cost });
        graph[b].push({ node: a, cost });
    });
    const dp = Array(N + 1).fill(10000*50);
    const queue = [{ node: 1, distance: 0 }];
    while (queue.length) {
        const { node, distance } = queue.shift();
        if (distance > K) break;

        if (distance <= dp[node]) {
            dp[node] = distance;
            graph[node].forEach(neighbor => {
                const newDistance = distance + neighbor.cost;
                if (newDistance <= K) {
                    queue.push({ node: neighbor.node, distance: newDistance });
                }
            });
        }
    }

    return dp.filter(dist => dist <= K).length;
}