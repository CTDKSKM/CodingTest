function solution(arrayA, arrayB) {
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b))

  let resultA = arrayA[0]
  let resultB = arrayB[0]

  arrayA.forEach((el) => {
    resultA = gcd(resultA, el)
  })

  arrayB.forEach((el) => {
    resultB = gcd(resultB, el)
  })

  let chkA = true
  let chkB = true

  arrayA.forEach((el) => {
    if (el % resultB === 0) {
      chkA = false
    }
  })

  arrayB.forEach((el) => {
    if (el % resultA === 0) {
      chkB = false
    }
  })

  return chkA && chkB ? (resultA > resultB ? resultA : resultB) : chkA ? resultB : chkB ? resultA : 0
}