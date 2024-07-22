function solution(n, info) {
    info.reverse();
    let ans = [-1];
    let maxd = 0;
    
    const combinations = [];
    const generateCombinations = (current, index) => {
        if (index === 11) {
            combinations.push([...current]);
            return;
        }
        current.push(true);
        generateCombinations(current, index + 1);
        current.pop();
        current.push(false);
        generateCombinations(current, index + 1);
        current.pop();
    };
    generateCombinations([], 0);
    
    for (let wl of combinations) {
        let t = 0;
        let s = 0;
        for (let i = 0; i < 11; i++) {
            if (wl[i]) {
                s += info[i] + 1;
            }
        }
        if (s <= n) {
            let apeach = 0;
            let ryan = 0;
            for (let i = 0; i < 11; i++) {
                if (!wl[i] && info[i] > 0) {
                    apeach += i;
                }
                if (wl[i]) {
                    ryan += i;
                }
            }
            let d = ryan - apeach;
            if (d > maxd) {
                maxd = d;
                ans = [];
                for (let i = 0; i < 11; i++) {
                    ans.push(wl[i] ? info[i] + 1 : 0);
                }
                ans[0] += n - s;
            }
        }
    }
    
    ans.reverse();
    return ans;
}
