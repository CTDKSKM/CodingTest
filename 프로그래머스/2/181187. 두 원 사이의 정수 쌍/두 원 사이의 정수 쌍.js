function solution(r1, r2) {
    let cnt = 0;
    for(let x=1; x<=r2; x++) {
        const x2 = Math.pow(x, 2);
        const largeY = Math.sqrt(Math.pow(r2, 2)-x2);
        const smallY = Math.sqrt(Math.pow(r1, 2)-x2) || 0;
        
        cnt += Math.floor(largeY) - Math.ceil(smallY) + 1
    }
    return cnt * 4;
}