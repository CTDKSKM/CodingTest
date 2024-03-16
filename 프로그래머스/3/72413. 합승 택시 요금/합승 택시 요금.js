function solution(n, s, a, b, fares) {
    // 그래프 생성
    const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(Infinity));
    for (let i = 1; i <= n; i++) graph[i][i] = 0;
    
    fares.forEach(([from, to, fare]) => {
        graph[from][to] = fare;
        graph[to][from] = fare;
    });

    // 플로이드-와샬 알고리즘으로 모든 노드 사이의 최단 거리 구하기
    for (let k = 1; k <= n; k++) {
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
            }
        }
    }

    // S에서 각 노드까지의 최단 거리 계산
    const fromS = graph[s];

    // 각 노드에서 A와 B로 가는 최단 거리를 합하여 최소 값을 찾기
    let minTotalFare = Infinity;
    for (let i = 1; i <= n; i++) {
        minTotalFare = Math.min(minTotalFare, fromS[i] + graph[i][a] + graph[i][b]);
    }

    return minTotalFare;
}
