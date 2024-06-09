function solution(plans) {
    plans = plans.map(([i, t, n]) => ([i, transTimeStrToNum(t), Number(n)]));
    
    plans.sort((a, b) => a[1] - b[1]);
    
    const answer = [];
    const keep = [];
    let nowIdx = 0;
    let nowtime = plans[0][1];
    
    while (nowIdx < plans.length) {
        const [name, start, playtime] = plans[nowIdx];
        const nextPlan = plans[nowIdx + 1];
        const nextStart = nextPlan ? nextPlan[1] : Infinity;

        if (nextStart < start + playtime) {
            keep.push([name, playtime - (nextStart - start)]);
        } else {
            answer.push(name);
            nowtime += playtime;

            while (keep.length && nowtime < nextStart) {
                const [keptName, keptPlaytime] = keep.pop();
                if (nextStart < nowtime + keptPlaytime) {
                    keep.push([keptName, keptPlaytime - (nextStart - nowtime)]);
                    break;
                } else {
                    answer.push(keptName);
                    nowtime += keptPlaytime;
                }
            }
        }
        
        nowtime = nextStart;
        nowIdx++;
    }
    
    while (keep.length) {
        answer.push(keep.pop()[0]);
    }

    return answer;
}

function transTimeStrToNum(str) {
    const [h, m] = str.split(':').map(Number);
    return h * 60 + m;
}
