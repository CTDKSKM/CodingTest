function solution(play_time, adv_time, logs) {
    const convertTtoN = (timeStr) => {
        const [hh, mm, ss] = timeStr.split(':');
        return +hh*3600 + +mm*60 + +ss
    }
    const convertNtoT = (timeNum) => {
        const hh = Math.floor(timeNum/3600);
        const mm = Math.floor((timeNum-hh*3600)/60);
        const ss = timeNum%60
        return `${hh < 10 ? '0' + hh : hh}:${mm < 10 ? '0' + mm : mm}:${ss < 10 ? '0' + ss : ss}`
    }
    const P_T = convertTtoN(play_time)
    const timeChecker = Array.from({length:P_T+1}, ()=>0);
    logs.forEach((timeLog, idx)=>{
        const [s, e] = timeLog.split('-');
        const sIdx = convertTtoN(s);
        const eIdx = convertTtoN(e);
        
        timeChecker[sIdx]++;
        timeChecker[eIdx]--;
    })
    const dp = Array.from({length:timeChecker.length}, ()=>0);
    for(let i=1; i<dp.length; i++) {
        dp[i] = timeChecker[i] + dp[i-1]
    }
    const advTime = convertTtoN(adv_time);
    let index = 0;
    
    let max = dp.slice(index, advTime+1).reduce((acc,cur)=>acc+cur, 0);

    let ans = [index, max];
    let temp = max;
    for(let i = advTime; i<dp.length; i++, index++) {
        temp += (dp[i] - dp[index]);

        if (temp > max) {
            ans = [index+1, temp];
            max = temp;
        }
    }
    return play_time == adv_time ? "00:00:00" : convertNtoT(ans[0]);
}