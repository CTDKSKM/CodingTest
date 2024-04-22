let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

const n = parseInt(input[0]);

const stack = [];
for (let i = 1; i <= n; i++) {
  stack.push(input[i].split(" ").map(Number));
}
stack.sort((a, b) => a[0] - b[0]);

let l = 0;
let r = stack[n - 1].reduce((a, b) => a + b);

let ans = 0;
while (l < r) {
  let mid = Math.floor((l + r + 1) / 2);
  let cur = stack[0][0];
  let cnt = n - 1;
  for (let i = 1; i < n; i++) {
    const [min, alpha] = stack[i];

    if (cur + mid > min + alpha) break;
    else cur = Math.max(cur + mid, min);
    cnt--;
  }

  if (cnt) r = mid - 1;
  else {
    l = mid;
    ans = mid;
  }
}

console.log(ans);
