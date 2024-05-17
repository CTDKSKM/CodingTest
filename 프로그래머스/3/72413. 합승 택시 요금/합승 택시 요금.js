class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(element, priority) {
        this.queue.push({ element, priority });
        this.queue.sort((a, b) => a.priority - b.priority);
    }

    dequeue() {
        return this.queue.shift().element;
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}

function dijkstra(graph, start, n) {
    const distances = Array(n + 1).fill(Infinity);
    distances[start] = 0;
    const pq = new PriorityQueue();
    pq.enqueue(start, 0);

    while (!pq.isEmpty()) {
        const current = pq.dequeue();
        const currentDistance = distances[current];

        graph[current].forEach(([neighbor, weight]) => {
            const distance = currentDistance + weight;
            if (distance < distances[neighbor]) {
                distances[neighbor] = distance;
                pq.enqueue(neighbor, distance);
            }
        });
    }

    return distances;
}

function solution(n, s, a, b, fares) {
    const graph = {};
    for (let i = 1; i <= n; i++) {
        graph[i] = [];
    }

    fares.forEach(([u, v, w]) => {
        graph[u].push([v, w]);
        graph[v].push([u, w]);
    });

    // 출발지 s에서 각 노드까지의 최단 거리
    const fromStart = dijkstra(graph, s, n);
    // 각 노드에서 A까지의 최단 거리
    const toA = dijkstra(graph, a, n);
    // 각 노드에서 B까지의 최단 거리
    const toB = dijkstra(graph, b, n);

    let answer = Infinity;
    for (let i = 1; i <= n; i++) {
        // 각 노드를 경유하는 경로의 총 비용 계산
        const totalCost = fromStart[i] + toA[i] + toB[i];
        answer = Math.min(answer, totalCost);
    }

    return answer;
}
