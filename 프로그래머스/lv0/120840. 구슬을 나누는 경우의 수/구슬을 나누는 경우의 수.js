function solution(balls, share) {
  function pac(num) {
    let result = 1;
    if (!num) return result;
    for (let i = num; i > 0; i--) {
      result *= i;
    }
    return result;
  }

  const npac = pac(balls);
  const nmmpac = pac(balls - share);
  const mpac = pac(share);

  return Math.round(npac / (nmmpac * mpac));
}