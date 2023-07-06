function solution(balls, share) {
  function combination(n, r) {
    let numerator = 1;
    let denominator = 1;

    for (let i = n; i > n - r; i--) {
      numerator *= i;
    }

    for (let i = r; i > 1; i--) {
      denominator *= i;
    }

    return numerator / denominator;
  }

  return combination(balls, share);
}
