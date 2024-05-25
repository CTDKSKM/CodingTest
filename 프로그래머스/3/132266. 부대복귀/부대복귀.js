function solution(n, roads, sources, destination) {
    const graph = Array.from({ length: n + 1 }, () => []);
    for (const [x, y] of roads) {
        graph[x].push(y);
        graph[y].push(x);
    }

    const dist = new Array(n + 1).fill(-1);
    dist[destination] = 0;
    const queue = [destination];

    while (queue.length) {
        const node = queue.shift();
        const nextNodeDistance = dist[node] + 1;
        for (const y of graph[node]) {
            if (dist[y] === -1) {
                dist[y] = nextNodeDistance;
                queue.push(y);
            }
        }
    }

    return sources.map(i => dist[i]);
}