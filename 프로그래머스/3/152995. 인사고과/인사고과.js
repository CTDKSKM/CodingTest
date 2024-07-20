function solution(scores) {
    const pScore = scores[0].reduce((a,c)=>a+c,0);
    
    
    const dict = {};
    let aMax = 0;
    let bMax = 0;
    scores.forEach(([a,b])=>{
        if (dict[a]) {
            if (dict[a] < b) dict[a] = b
        }
        else dict[a] = b;
        
        aMax = Math.max(aMax, a);
        bMax = Math.max(bMax, b);
    })
    const arr = Object.entries(dict).map(([a,b])=>([+a,b])).sort((a,b)=>a[0]-b[0]);

    const filtered = [];
    for(let i=0; i<scores.length; i++) {
        const [a, b] = scores[i]
        let cnt = arr.length-1;
        let isPassed = true;
        while (a < aMax && b < bMax && a < arr[cnt][0] && cnt && isPassed) {
            if (b < arr[cnt][1]) {
                isPassed = false;
                break
            }
            cnt--
        }
        
        if (i == 0 && !isPassed) return -1
        
        if (isPassed) filtered.push(a+b)
    }
    
    return filtered.sort((a,b)=>b-a).findIndex((v)=>v == pScore) + 1
}