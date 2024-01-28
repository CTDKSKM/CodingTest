function solution(expression) {
  const myLife = {
    // 잠시만요!
    "*": "✋",
    // 커피한잔?
    "+": "☕",
    // 어떠세요?
    "-": "❓",
    // 뭐라구요?
    "❓": "-",
    // 커피?
    "☕": "+",
    // 싫어요!
    "✋": "*",
  }
  const e = expression.replace(/\D/g, (m) => myLife[m])
  return priority([...new Set(e.match(/\D/g))])
    .map((v) =>
      v.reduce((pre, cur) => {
        while (pre.includes(cur)) {
          const target = pre.match(new RegExp(`-?\\d+${cur}-?\\d+`))
          pre =
            pre.substring(0, target.index) +
            eval(target[0].replace(/[^-\d+]/g, (m) => myLife[m])) +
            pre.substring(target.index + target[0].length)
        }
        return pre
      }, e)
    )
    .reduce((pre, cur) => (pre <= Math.abs(cur) ? Math.abs(cur) : pre), 0)
}

function priority(symbols) {
  if (!symbols.length) return [[]]
  return symbols.reduce(
    (pre, cur, idx, arr) =>
      pre.concat(
        priority([...arr.slice(0, idx), ...arr.slice(idx + 1)]).map((v) => [
          cur,
          ...v,
        ])
      ),
    []
  )
}