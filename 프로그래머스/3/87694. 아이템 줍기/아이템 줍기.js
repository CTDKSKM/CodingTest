function solution(rectangle, cx, cy, ix, iy) {
    const dx = [0, 0, -1, 1];
    const dy = [1, -1, 0, 0];
    const mapSize = 102;
    const map = Array.from({ length: mapSize }, () => Array(mapSize).fill(0));
    const visited = Array.from({ length: mapSize }, () => Array(mapSize).fill(false));

    function makeLine([lx, ly, rx, ry]) {
        for (let i = lx; i <= rx; i++) {
            for (let j = ly; j <= ry; j++) {
                if ((i === lx || i === rx || j === ly || j === ry) && map[i][j] !== 2) {
                    map[i][j] = 1;
                } else {
                    map[i][j] = 2;
                }
            }
        }
    }

    function bfs(cx, cy, ix, iy) {
        const queue = [];
        queue.push([cx, cy, 0]);
        visited[cx][cy] = true;

        while (queue.length > 0) {
            const [x, y, dist] = queue.shift();
            if (x === ix && y === iy) return dist / 2;
            
            for (let i = 0; i < 4; i++) {
                const nx = x + dx[i];
                const ny = y + dy[i];
                
                if (nx < 0 || ny < 0 || nx >= mapSize || ny >= mapSize) continue;
                if (map[nx][ny] !== 1 || visited[nx][ny]) continue;
                
                queue.push([nx, ny, dist + 1]);
                visited[nx][ny] = true;
            }
        }
        return 0;
    }

    rectangle.forEach(rect => {
        rect = rect.map(v => v * 2);
        makeLine(rect);
    });
    
    return bfs(cx * 2, cy * 2, ix * 2, iy * 2);
}
