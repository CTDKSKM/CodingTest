const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const k = +input[0].split(" ")[1];
const bags = [];

for (let i = 1; i < input.length; i++) {
  const [w, v] = input[i].split(" ");
  bags.push([+w, +v]);
}

function solution(k, bags) {
  const dp = new Array(k + 1).fill(0);
  for (let i = 0; i < bags.length; i++) {
    const [w, v] = bags[i];
    for (let j = k; j >= w; j--) {
      if (dp[j - w] + v > dp[j]) {
        dp[j] = dp[j - w] + v;
      }
    }
  }
  return dp[k];
}

console.log(solution(k, bags));
