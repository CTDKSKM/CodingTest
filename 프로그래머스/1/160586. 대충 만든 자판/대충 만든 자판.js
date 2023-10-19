function solution(keymap, targets) {
    const answer = [];

  for (let i of targets) {
    let sum = 0;
    for (let j of i) {
      let idxArr = keymap.map((v) => v.split("").indexOf(j) + 1 || Infinity);
      sum += Math.min(...idxArr);
    }
    sum = sum === Infinity ? -1 : sum;
    answer.push(sum);
  }
  return answer;
}