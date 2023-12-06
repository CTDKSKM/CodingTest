function solution(routes) {
    let count = 0;
    let temp = -Infinity;
    routes.sort((a,b)=>a[1]-b[1]);
    routes.forEach(([s,e])=>{
        if (s > temp) {
            count++
            temp = e
        }
    })
    return count
}