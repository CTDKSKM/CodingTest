function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    
    return bfs(0, 0, n, m, maps)
}
function bfs(x, y, n, m, maps) {
    const dx = [-1, 1, 0, 0]
    const dy = [0, 0, -1, 1]
    
    const queue = [[0, 0]]

    while (queue[0]) {
        const [x, y] = queue.shift()
        for(let i=0; i<4; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];
            if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue
            if (maps[nx][ny] == 0) continue
            if (maps[nx][ny] == 1) {
                maps[nx][ny] = maps[x][y] + 1
                queue.push([nx, ny])
            }
        }
    }
    return maps[n-1][m-1] == 1 ? -1 : maps[n-1][m-1]
}
