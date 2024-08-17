const pipe = (..._) => _.reduce((g, f) => f(g)),
  range = n => Array(n).fill().map((_, i) => i),
  splitLast = arr => [arr.slice(0, -1), arr[arr.length - 1]];

const lowerBound = (arr, value) => {
  const helper = (l, r) => {
    if (l >= r) return l;
    const m = Math.floor((l + r) / 2);
    if (arr[m] < value) return helper(m + 1, r);
    return helper(l, m);
  };
  return helper(0, arr.length);
};

function solution(info, query) {
  const db = pipe(
    info.map(s => s.split(' ')).map(splitLast),
    list =>
      list.flatMap(([keywords, score]) =>
        range(1 << 4).map(bit => [
          range(4).map(i => bit & (1 << i)).map((c, i) => (c ? keywords[i] : '-')).reduce((key, c) => key + c),
          score,
        ]),
      ),
    entries => [...entries].sort((p, c) => p[1] - c[1]),
    entries =>
      entries.reduce((db, [key, score]) => (db[key] || (db[key] = []), db[key].push(+score), db), {}),
  );

  return query
    .map(s => s.split(' ').filter(s => s !== 'and')).map(splitLast)
    .map(([keywords, score]) => {
      const scores = db[keywords.join('')] || [];
      return scores.length - lowerBound(scores, score);
    });
}