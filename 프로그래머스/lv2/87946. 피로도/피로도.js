let solution = (k, d) => Math.max(...d.map(([m, v], i) => k < m ? 0 : solution(k - v, [...d.slice(0, i), ...d.slice(i + 1)]) + 1), 0)
