const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const a = input[1].split(" ").map((v) => parseInt(v));
const b = input[2].split(" ").map((v) => parseInt(v));
let ans = 0;
let diff = check(a);
function quickSort(A, p, r) {
  if (p < r) {
    let q = partition(A, p, r);
    if (!ans) quickSort(A, p, q - 1);
    if (!ans) quickSort(A, q + 1, r);
  }
}

function partition(A, p, r) {
  let pivot = A[r];
  let i = p - 1;

  for (let j = p; j < r; j++) {
    if (A[j] <= pivot) {
      i++;
      [A[i], A[j]] = [A[j], A[i]];
      if (diff == i || diff == j) {
        diff = check(a);
      }
    }
  }
  [A[i + 1], A[r]] = [A[r], A[i + 1]];
  if (diff == r || diff == i + 1) {
    diff = check(a);
  }
  return i + 1;
}

function check(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== b[i]) return i;
  }
  ans = 1;
  return true;
}

if (ans) console.log(ans);
else {
  quickSort(a, 0, a.length - 1);
  console.log(ans);
}
