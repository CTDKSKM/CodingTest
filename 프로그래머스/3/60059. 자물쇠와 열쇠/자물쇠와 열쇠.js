function solution(key, lock) {
  let m = key.length,
    n = lock.length;
  const keys = getKeys(key, m);

  let lockCnt = lock.reduce((acc, arr) => {
    const cnt = arr.filter(v => !v).length;
    return acc + cnt;
  }, 0);
  if (!lockCnt) return true;

  // search
  for (let x = -m; x < n; x++) {
    for (let y = -m; y < n; y++) {
      for (let k = 0; k < 4; k++) {
        let matchCnt = 0,
          wrong = 0;
        for (let i = 0; i < m; i++) {
          for (let j = 0; j < m; j++) {
            // 범위 체크
            if (x + i < 0 || y + j < 0 || x + i >= n || y + j >= n) continue;

            // 일치 키 돌기 자물쇠 홈
            if (keys[k][i][j] == 1 && lock[x + i][y + j] == 0) {
              matchCnt++;
            }
            // 어긋남 키 돌기, 자물쇠 돌기
            else if (keys[k][i][j] == 1 && lock[x + i][y + j] == 1) {
              wrong++;
              break;
            }
          }
          if (wrong) break;
        }
        if (matchCnt == lockCnt && !wrong) {
          return true;
        }
      }
    }
  }

  return false;
}

const getKeys = (key, m) => {
  const keys = [[], [], [], []];
  for (let n = 0; n < 4; n++) {
    for (let i = 0; i < m; i++) {
      keys[n].push([]);
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < m; j++) {
      keys[0][i][j] = key[i][j];
      keys[1][i][j] = key[m - j - 1][i];
      keys[2][i][j] = key[m - i - 1][m - j - 1];
      keys[3][i][j] = key[j][m - i - 1];
    }
  }
  return keys;
};