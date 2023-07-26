function solution(score) {
    return score.map(([e, m]) => {
        const me = e + m
        let temp = 1;
        for(let i=0; i<score.length; i++) {
            const [e2, m2] = score[i]
            if (me < e2 + m2) temp++
        }
        return temp
    });
}
// 다른 i 들의 값이 자신보다 크면 ++ 