function solution(arr, n=0) {
    let loopCount = 0;
  const fibo = list => {
    let count = 0;
    const result = list.map(int => {
      if (int >= 50 && int % 2 === 0) {
        return int / 2;
      } else if (int < 50 && int % 2 === 1) {
        return int * 2 + 1;
      }
      count = count + 1;
      return int;
    });
    if (count === list.length) return loopCount;
    fibo(result);
    loopCount = loopCount + 1;
    console.log(result);
    return loopCount;
  };
  return fibo(arr, arr.length);
}