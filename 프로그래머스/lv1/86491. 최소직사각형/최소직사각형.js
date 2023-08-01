function solution(sizes) {
    sizes.forEach(v=>v.sort((a,b)=>a-b))
    const rowArr = []
    const colArr = []
    for(let i=0; i<sizes.length; i++) {
        rowArr.push(sizes[i][0])
        colArr.push(sizes[i][1])
    }
    return Math.max(...rowArr) * Math.max(...colArr);
}