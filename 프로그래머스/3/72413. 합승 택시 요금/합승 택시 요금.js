function solution(n, s, a, b, fares) {
    const map = Array(n + 1).fill(null).map(() => Array(n + 1).fill(Infinity));
    fares.forEach(([start, end, dist]) => {
        map[start][end] = map[end][start] = dist;
    });
    const distFromA = findDistToAllNodes(n, map, a);
    const distFromB = findDistToAllNodes(n, map, b);
    const distFromS = findDistToAllNodes(n, map, s);
    return Math.min(...distFromS.map((dist, idx) => dist + distFromA[idx] + distFromB[idx]));
}

function findDistToAllNodes(n, map, node) {
    const dist = Array(n + 1).fill(Infinity);
    const visit = Array(n + 1).fill(false);
    let lastVisit = node;

    dist[node] = 0;
    visit[node] = true;

    for (let i = 0; i < n - 1; i++) {
        map[lastVisit].forEach((d, idx) => {
            dist[idx] = Math.min(d + dist[lastVisit], dist[idx]);
        });
        let min = Infinity;

        for (let j = 1; j <= n; j++) {
            if (visit[j]) continue;

            if (dist[j] < min) {
                lastVisit = j;
                min = dist[j];
            }
        }
        visit[lastVisit] = true;
    }

    return dist;
}