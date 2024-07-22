function solution(n, info) {
    let maxDiff = -1;
    let answer = Array(11).fill(0);

    const calculateScore = (ryanInfo, apeachInfo) => {
        let ryanScore = 0, apeachScore = 0;
        for (let i = 0; i < 11; i++) {
            if (ryanInfo[i] > apeachInfo[i]) {
                ryanScore += (10 - i);
            } else if (apeachInfo[i] > 0) {
                apeachScore += (10 - i);
            }
        }
        return ryanScore - apeachScore;
    };

    const dfs = (count, idx, ryanInfo) => {
        if (count > n) return;

        if (idx === 11) {
            if (count < n) {
                ryanInfo[10] += (n - count);  // 남은 화살은 모두 0점 과녁에
            }
            const diff = calculateScore(ryanInfo, info);
            if (diff > maxDiff) {
                maxDiff = diff;
                answer = ryanInfo.slice();
            } else if (diff === maxDiff) {
                for (let i = 10; i >= 0; i--) {
                    if (ryanInfo[i] > answer[i]) {
                        answer = ryanInfo.slice();
                        break;
                    } else if (ryanInfo[i] < answer[i]) {
                        break;
                    }
                }
            }
            return;
        }

        if (n - count > info[idx]) {
            const newRyanInfo = ryanInfo.slice();
            newRyanInfo[idx] = info[idx] + 1;
            dfs(count + newRyanInfo[idx], idx + 1, newRyanInfo);
        }

        ryanInfo[idx] = 0;
        dfs(count, idx + 1, ryanInfo);
    };

    dfs(0, 0, Array(11).fill(0));

    return maxDiff <= 0 ? [-1] : answer;
}
