const fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

function different() {
  for (let i = 0; i < N; i++) if (A[i] !== B[i]) return i
  return false
} 
// A와 B가 다른지 확인하고 다르면 i 값을 반환

function swap(a, b) {
  ;[A[a], A[b]] = [A[b], A[a]]
  if (diff === a || diff === b) {
    diff = different()
    if (diff === false) answer = 1
  }
  // diff 값이 변화할 때마다 두 배열이 같은지 확인
}

function partition(p, r) {
  const x = A[r]
  let i = p - 1
  for (let j = p; j <= r - 1; j++) {
    if (A[j] <= x) swap(++i, j)
  }
  if (i + 1 !== r) swap(i + 1, r)
  return i + 1
}

function quickSort(p, r) {
  if (p < r) {
    const q = partition(p, r)
    quickSort(p, q - 1)
    quickSort(q + 1, r)
  }
}

const N = Number(input[0])
let A = input[1].split(' ').map(e => +e)
const B = input[2].split(' ').map(e => +e)
let answer = 0
let diff = different()
if (diff !== false) quickSort(0, N - 1)
else answer = 1
console.log(answer)