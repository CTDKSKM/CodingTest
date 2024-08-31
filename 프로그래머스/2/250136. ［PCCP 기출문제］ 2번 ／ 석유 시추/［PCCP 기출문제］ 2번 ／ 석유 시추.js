function solution(land) {
  const dir = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  const getOilInfo = (x, y) => {
    let oilInfo = [0, y, y];
    let queue = [[x, y]];

    while (queue.length) {
      let [i, j] = queue.pop();
      if (land[i][j] === 0) continue;
      land[i][j] = 0;
      oilInfo[0]++;
      if (oilInfo[1] > j) oilInfo[1] = j;
      if (oilInfo[2] < j) oilInfo[2] = j;
      for (let [dx, dy] of dir) {
        let newX = i + dx, newY = j + dy;
        if (newX >= 0 && newX < land.length && newY >= 0 && newY < land[0].length 
            && land[newX][newY] === 1)
          queue.push([newX, newY]);
      }
    }
    return oilInfo;
  };

  let values = new Array(land[0].length).fill(0);

  for (let i = 0; i < land.length; i++)
    for (let j = 0; j < land[0].length; j++)
      if (land[i][j]) {
        let [value, start, finish] = getOilInfo(i, j);
        while (start <= finish) values[start++] += value;
      }
  return Math.max(...values);
}