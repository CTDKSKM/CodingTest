const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

let answer = "";

for (let i = 1; i < input.length; i++) {
  answer += solution(+input[i]) + "\n";
}
function solution(n) {
  const dp = {};
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 4;
  for (let i = 4; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }
  return dp[n];
}

console.log(answer);
