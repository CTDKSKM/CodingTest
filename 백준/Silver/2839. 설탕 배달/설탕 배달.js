const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const n = +input[0];

function solution(n) {
  const dp = {};
  dp[3] = 1;
  dp[5] = 1;
  let arr = [3, 5];
  if (n == 3 || n == 5) return 1;
  while (arr.length) {
    const arr2 = [];
    for (const d of arr) {
      for (const e of [d + 3, d + 5]) {
        if (e > n || dp[e]) continue;
        if (e == n) return dp[d] + 1;
        dp[e] = dp[d] + 1;

        arr2.push(e);
      }
    }
    arr = arr2;
  }

  return -1;
}

console.log(solution(n));
