function findNear(arr, value, options, limit) {
    if (options === 'less') {
        for (let i = arr.length - 1; i >= 0; i--) {
            if(arr[i] < value) {
                return arr[i] + 1
            }
        }
        return 0
    }

    if (options === 'grater') {
        for (let i = 0; i < arr.length; i++) {
            if(arr[i] > value) {
                return arr[i] - 1
            }
        }

        return limit - 1
    }
}

function solution(board) {
    let n = board.length
    let m = board[0].length

    let visited = new Array(n).fill(0).map(() => new Array(m).fill(0).map(() => Infinity))
    let start, goal;

    let disturbanceRow = {}
    let disturbanceCol = {}

    for (let i = 0; i < n; i++) {
        disturbanceRow[i] = []
    }

    for (let j = 0; j < m; j++) {
        disturbanceCol[j] = []
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (board[i][j] === 'R') start = [i, j]
            if (board[i][j] === "G") goal = [i, j]
            if (board[i][j] === 'D') {
                disturbanceRow[i].push(j)
                disturbanceCol[j].push(i)
            }
        }
    }

    let queue = [start]
    visited[start[0]][start[1]] = 0

    while (queue.length > 0) {
        const [row, col] = queue.shift()
        let nRow, nCol;

        // 왼쪽으로 쭉
        nRow = row
        nCol = findNear(disturbanceRow[row], col, 'less', m)
        if (0 <= nRow && nRow < n && 0 <= nCol && nCol < m) {
            if (board[nRow][nCol] === "D") continue
            if (visited[nRow][nCol] > visited[row][col] + 1) {
                visited[nRow][nCol] = visited[row][col] + 1
                queue.push([nRow, nCol])
            }
        }

        // 오른쪽으로 쭉
        nRow = row 
        nCol = findNear(disturbanceRow[row], col, 'grater', m)
        if (0 <= nRow && nRow < n && 0 <= nCol && nCol < m) {
            if (visited[nRow][nCol] > visited[row][col] + 1) {
                visited[nRow][nCol] = visited[row][col] + 1
                queue.push([nRow, nCol])
            }
        }

        // 위쪽으로 쭉
        nRow = findNear(disturbanceCol[col], row, 'less', n)
        nCol = col
        if (0 <= nRow && nRow < n && 0 <= nCol && nCol < m) {
            if (visited[nRow][nCol] > visited[row][col] + 1) {
                visited[nRow][nCol] = visited[row][col] + 1
                queue.push([nRow, nCol])
            }
        }

        // 아래쪽으로 쭉
        nRow = findNear(disturbanceCol[col], row, 'grater', n)
        nCol = col
        if (0 <= nRow && nRow < n && 0 <= nCol && nCol < m) {
            if (visited[nRow][nCol] > visited[row][col] + 1) {
                visited[nRow][nCol] = visited[row][col] + 1
                queue.push([nRow, nCol])
            }
        }
    }



    const result = visited[goal[0]][goal[1]]

    return result === Infinity ? -1 : result
}