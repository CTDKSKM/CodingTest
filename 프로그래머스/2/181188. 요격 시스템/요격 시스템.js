function solution(targets) {
    let answer = 0;
    const tgts = targets.slice().sort((a, b) => a[0] - b[0] || b[1] - a[1]);
    let tail = -1;
    tgts.forEach(([s, e]) => {
        if (tail <= s) {
            answer++;
            tail = e;
        } else if (e < tail) {
            tail = e;
        }
    });
    return answer;
}