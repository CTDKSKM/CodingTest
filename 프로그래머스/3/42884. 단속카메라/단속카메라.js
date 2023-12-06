function solution(routes) {
    let count = 0;
    let temp = -Infinity;
    routes.sort((a,b)=>a[0] - b[0])
    routes.forEach(([s, e], i)=>{
        if (s > temp) {
            count++
            temp = e
        }
        if (e < temp) {
            temp = e
        }
    })

    return count;
}