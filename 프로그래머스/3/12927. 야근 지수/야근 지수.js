function solution(n, works) {
    works.sort((a,b)=>a-b)
    while(n>0) {
        for(let i=works.length-1; i>=0; i--) {
            if (n<=0) break

            if (works[i] <= works[i-1]) {
                works[i]--
                n--
                continue
            }
            else {
                works[i]--
                n--
                break
            }
        }
    }

    return works.some(v=>v<0) ? 0 : works.map(v=>Math.pow(v,2)).reduce((acc,cur)=>acc+cur,0)
}