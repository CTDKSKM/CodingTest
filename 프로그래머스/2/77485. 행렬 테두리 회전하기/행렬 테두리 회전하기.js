function solution(rows, columns, queries) {
    var answer = [];
    let count = 1;
    const arr = Array.from({length:rows}, ()=>Array.from({length:columns},()=>count++));
    
    const direction = [[1, 0], [0, 1], [-1, 0], [0, -1]]
    
    queries.forEach(val=>{
        const [r1, c1, r2, c2] = val
        let cnt = (c2-c1+1)*2 + (r2-r1-1)*2
        let d_i = 0
        
        let x = r1-1
        let y = c1-1
        const memo = arr[x][y]
        let min = memo;
        
        let flag = true
        while(cnt) {
            cnt--
            
            const [dx, dy] = direction[d_i%4]
            
            if (x + dx >= r2 || y + dy >= c2 || x + dx < r1-1 || y + dy < c1-1) {d_i++; cnt++; continue}
            
            if (cnt) arr[x][y] = arr[x+dx][y+dy]
            else arr[x][y] = memo
            
            x += dx
            y += dy
            
            min = Math.min(min, arr[x][y])
        }
        answer.push(min)
    })

    return answer;
}