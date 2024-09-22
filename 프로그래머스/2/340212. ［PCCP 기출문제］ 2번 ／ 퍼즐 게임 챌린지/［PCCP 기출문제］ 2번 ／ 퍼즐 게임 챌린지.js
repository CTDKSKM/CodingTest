function solution(diffs, times, limit) {
    let low = diffs[0];
    let high = diffs[0];
    diffs.forEach((needLev)=>{
        if (needLev < low) low = needLev;
        if (needLev > high) high = needLev;
    })

    let min = high;
    
    const calc = (level) => {
        let remain = limit;
        let prevTime = 0;
        
        for (let i = 0; i < diffs.length; i++) {
            const attempts = diffs[i] - level;
            const curTime = times[i];

            if (attempts > 0) {
                remain -= (curTime + prevTime) * attempts + curTime;
            } else {
                remain -= curTime;
            }

            if (remain < 0) {
                break;
            }

            prevTime = curTime;
        }
        
        return remain;
    }
    
    while ( low <= high ) {
        let mid = Math.floor( ( low + high ) / 2 );
        
        let remain = calc(mid);
        
        if ( remain >= 0 ) {
            min = mid;
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }
    
    return min;
}