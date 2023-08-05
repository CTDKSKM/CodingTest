function solution(k, tangerine) {
  const tangMap = {};

  tangerine.forEach((el) => (tangMap[el] = (tangMap[el] ?? 0) + 1));

  const arr = Object.values(tangMap).sort((a,b)=>a-b);
  let answer = 0;

  while (k > 0) {
    k -= arr.pop();
    answer += 1;
  }

  return answer;
}