function solution(jobs) {
    let sum = 0;
    let now = 0;
    jobs.sort((a,b)=>a[0]-b[0] === 0 ? a[1]-b[1] : a[0]-b[0]);
    const worked = Array(jobs.length).fill(false);
    const q = [jobs[0]];
    worked[0] = true
    
    while(q.length) {
        const [s, e] = q.shift();
        if (now < s) now = s;
        if (now > s) sum += (now-s);
        now += e;
        sum += e;
        
        if (worked.every(v=>v==true)) break
        
        let min = Infinity;
        let nextIdx;
        jobs.forEach((job,idx)=>{
            const [s2, e2] = job;
            
            if (!worked[idx] && now > s2) {
                if (min > e2) {
                    min = e2;
                    nextIdx = idx;
                }
            }
        })
        if (min === Infinity) nextIdx = worked.indexOf(false);
        q.push(jobs[nextIdx]);
        worked[nextIdx] = true;
    }

    return Math.floor(sum / jobs.length);
}