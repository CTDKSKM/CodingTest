function solution(x, y, n) {
    if (x === y) return 0
    const dp = {}
    dp[x] = 0
    let data = [x]
    while(data.length) {
        const newData = [];
        for(const d of data) {
            for(const e of [d+n, d*2, d*3]) {

                if (e > y || dp[e]) continue
                if (e == y) return dp[d]+1

                dp[e] = dp[d]+1;

                newData.push(e)
            }
        }
        data = newData
    }
  return -1;
}

/*
x += n
x *= 2
x *= 3
n더하기, 2,3곱하기를 사용해서 y로 만들기. 최소횟수 리턴. 만들수 없다면 -1 return
dp
*/