function solution(n, roads, sources, destination) {
    const graph = createGraph(n, roads);
    const costs = bfs(graph, destination, n);
    
    return sources.map(start => costs[start] === Infinity ? -1 : costs[start]);
}

function createGraph(n, roads) {
    const graph = {};
    
    roads.forEach(([from, to]) => {
        graph[from] = [...(graph[from] || []), to];
        graph[to] = [...(graph[to] || []), from];
    });
    
    return graph;
}

function bfs(graph, start, n) {
    const distances = new Array(n + 1).fill(Infinity);
    const visited = new Array(n + 1).fill(false);
    visited[start] = true;
    distances[start] = 0;
    
    const queue = [start];
    
    while (queue.length) {
        const node = queue.shift();
        
        for (const next of graph[node] || []) {
            if (!visited[next]) {
                visited[next] = true;
                queue.push(next);
                distances[next] = distances[node] + 1;
            }
        }
    }
    
    return distances;
}
