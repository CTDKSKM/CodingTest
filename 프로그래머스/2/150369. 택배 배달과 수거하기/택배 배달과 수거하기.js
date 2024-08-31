function solution(cap, n, ds, ps) {
    let ans = 0;
    let dIdx = n-1;
    let pIdx = n-1;
    for (let i = n - 1; i >= 0; i--) {
        while (ds[i] > 0 || ps[i] > 0) {
            ans += (i + 1) * 2; // 왕복 거리 계산

            let dNum = cap; // 배달 가능한 용량
            let pNum = 0;   // 수거한 용량
            
            //배달
            for (dIdx; dIdx >= 0; dIdx--) {
                if (ds[dIdx] > 0) {
                    let dAmount = Math.min(dNum, ds[dIdx]);
                    dNum -= dAmount;
                    ds[dIdx] -= dAmount;
                }
                if (dNum === 0) break;
            }
            
            //수거
            for (pIdx; pIdx>=0; pIdx--) {
                if (ps[pIdx] > 0) {
                    let pAmount = Math.min(cap - pNum, ps[pIdx]);
                    pNum += pAmount;
                    ps[pIdx] -= pAmount;
                }
                if (pNum === cap) break;
            }
        }
    }

    return ans;
}
