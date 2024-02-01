const solution = (rows, columns, queries) => {
  const rotate = (arr, query) => {
    let [x1, y1, x2, y2] = query.map((item) => item - 1);
    let beforeNum = arr[x1 + 1][y1];
    let min = arr[x1 + 1][y1];
    let x = x1;
    let y = y1;
    const total = (x2 - x1 + 1) * (y2 - y1 + 1) - (y2 - y1 - 1) * (x2 - x1 - 1);
    for (let i = 0; i < total; i++) {
      min = Math.min(arr[x][y], min); 
      [beforeNum, arr[x][y]] = [arr[x][y], beforeNum];
      if (y < y2 && x == x1) y++;
      else if (y == y2 && x < x2) x++;
      else if (x == x2 && y1 < y) y--;
      else x--;
    }
    return min;
  };
  const ans = [];
  const map = Array.from(Array(rows), () => Array(columns));
  let num = 1;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      map[i][j] = num++;
    }
  }
  for (let query of queries) {
    ans.push(rotate(map, query));
  }
  return ans;
};