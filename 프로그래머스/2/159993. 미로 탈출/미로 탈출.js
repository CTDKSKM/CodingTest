function solution(maps) {
    const numRows = maps.length;
    const numCols = maps[0].length;

    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]; // Up, down, left, right

    const findShortestPath = (start, end) => {
        const visited = Array(numRows).fill().map(() => Array(numCols).fill(false));
        const distances = Array(numRows).fill().map(() => Array(numCols).fill(Infinity));
        const queue = [start];
        visited[start.row][start.col] = true;
        distances[start.row][start.col] = 0;

        while (queue.length) {
            const { row, col, count } = queue.shift();

            for (const [dx, dy] of directions) {
                const nx = col + dx;
                const ny = row + dy;

                if (nx < 0 || nx >= numCols || ny < 0 || ny >= numRows || visited[ny][nx] || maps[ny][nx] === 'X') continue;

                distances[ny][nx] = Math.min(distances[ny][nx], count + 1);
                queue.push({ row: ny, col: nx, count: distances[ny][nx] });
                visited[ny][nx] = true;

                if (maps[ny][nx] === end) return count + 1;
            }
        }
        return -1;
    };

    let answer = 0;

    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            if (maps[row][col] === 'S') {
                const shortestToL = findShortestPath({ row, col, count: 0 }, 'L');
                if (shortestToL === -1) return -1;
                answer += shortestToL;
            }
            else if (maps[row][col] === 'L') {
                const shortestToE = findShortestPath({ row, col, count: 0 }, 'E');
                if (shortestToE === -1) return -1;
                answer += shortestToE;
            }
        }
    }

    return answer;
}
