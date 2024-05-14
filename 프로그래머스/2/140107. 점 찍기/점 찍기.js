function solution(k, d) {
    let ans = 0;
    for(let x=0; x<=d; x+=k) {
        let y = Math.floor( Math.sqrt( Math.pow(d, 2) - Math.pow(x, 2) ) )
        
        ans += Math.floor(y/k+1)
    }
    return ans;
}