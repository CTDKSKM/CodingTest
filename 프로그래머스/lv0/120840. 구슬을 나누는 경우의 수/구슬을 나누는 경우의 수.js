function solution(balls, share) {
  function fac(num) {
    let result = 1;
    if (!num) return result;
    for (let i = num; i > 0; i--) {
      result *= i;
    }
    return result;
  }

  const nfac = fac(balls);
  const nmmfac = fac(balls - share);
  const mfac = fac(share);

  return Math.round(nfac / (nmmfac * mfac));
}