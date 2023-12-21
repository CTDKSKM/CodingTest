const calc = (minerals, pick) => {
    const pirodo = {'diamond': [1, 5, 25], 'iron': [1, 1, 5], 'stone': [1, 1, 1]};
    return minerals.reduce((p, c) => p + pirodo[c][pick], 0);
}
function solution(picks, minerals) {
    let answer = 1 << 30;
    if (picks.reduce((p, c) => p + c)) {
        for(let i = 0; i < 3; i++) {
            if (picks[i] > 0) {
                let ps = [ ...picks ];
                ps[i]--;
                answer = Math.min(calc(minerals.slice(0, 5), i) + solution(ps, minerals.slice(5)), answer);
            }
        }
        return answer;
    } else return 0;
}