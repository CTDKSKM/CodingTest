const direction = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

let n, m;
function solution(board) {
  n = board.length;
  m = board[0].length;
  let sx, sy, ex, ey;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === "R") {
        sx = i;
        sy = j;
      }
      if (board[i][j] === "G") {
        ex = i;
        ey = j;
      }
    }
  }

  const discovered = Array.from(Array(n), () => Array(m).fill(false));
  discovered[sx][sy] = true;
  let queue = [[sx, sy, 0]];
  while (queue.length !== 0) {
    const size = queue.length;
    let nextQueue = [];

    for (let i = 0; i < size; i++) {
      const [x, y, cnt] = queue.pop();

      for (const [dx, dy] of direction) {
        let nx = x + dx;
        let ny = y + dy;
        while (check(nx, ny) && board[nx][ny] !== "D") {
          nx += dx;
          ny += dy;
        }
        nx -= dx;
        ny -= dy;
        if (board[nx][ny] === "G") {
          return cnt + 1;
        }
        if (!discovered[nx][ny]) {
          discovered[nx][ny] = true;
          nextQueue.push([nx, ny, cnt + 1]);
        }
      }
    }
    queue = nextQueue;
  }
  return -1;
}

const check = (nx, ny) => {
  return 0 <= nx && nx < n && 0 <= ny && ny < m;
};