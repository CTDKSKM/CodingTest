function solution(progresses, speeds) {
    const ans = [];

    const results = progresses.map((p, idx) => {
        const rest = 100 - p;
        return Math.ceil(rest/speeds[idx])
    })

    let cnt = 0;
    let cur = results[0];
    results.forEach(r => {
        if(cur < r) {
            ans.push(cnt);
            cur = r; cnt = 1;
        } else {
            cnt++;
        }
    })
    ans.push(cnt);
    return ans;
}