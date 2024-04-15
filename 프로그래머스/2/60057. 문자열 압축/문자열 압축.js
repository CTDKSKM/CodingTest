function solution(s) {
    let answer = s.length;
    let unit = 1;
    let cnt = 1;
    while (unit <= s.length / 2) {
        let str = '';
        let i = 0;
        let j = unit;
        for(i; i<s.length;) {
            const a = s.slice(i, i+unit);
            
            for(j = i + unit; j<s.length; j+=unit) {
                const b = s.slice(j, j + unit);
                if (a == b) cnt++
                else break
            }
            i += unit * cnt
            if (cnt > 1) str += cnt + a
            else str += a
            cnt = 1;
        }
        answer = Math.min(str.length, answer)
        unit++
    }
        
    return answer;
}