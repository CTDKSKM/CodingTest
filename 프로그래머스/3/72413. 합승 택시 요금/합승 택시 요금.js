function solution(n, s, a, b, fares) {
    let ret = 20000000;

    let graph = new Array(n+1).fill(0).map(e=>new Array(n+1).fill(1000000));

    for (let fare of fares) {
        graph[fare[0]][fare[1]] = fare[2];
        graph[fare[1]][fare[0]] = fare[2];
    }

    for(let i=1; i<=n; i++) {
        graph[i][i] = 0;
    }

    for(let i=1; i<=n; i++) {
        for(let j=1; j<=n; j++ ) {
            for(let k=1; k<=n; k++) {
                graph[j][k] = Math.min(graph[j][k],graph[j][i]+graph[i][k])
            }
        }
    }

    for(let i=1; i<=n; i++) {
        ret = Math.min(ret,graph[s][i]+graph[i][a]+graph[i][b]);
    }

    return ret;
}

