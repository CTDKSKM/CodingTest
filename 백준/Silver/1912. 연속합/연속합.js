const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const arr = input[1].split(" ").map((val) => +val);

function solution(nums) {
  let max = nums[0];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum > max) {
      max = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return max;
}

console.log(solution(arr));
