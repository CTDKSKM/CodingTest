function solution(land) {
    const n = land.length;
    const m = land[0].length;
    
    const visited = Array.from({length: n}, ()=>Array.from({length:m}, ()=>false));
    const dict = {};
    let markNum = 1;
    
    const dfs = (y, x) => {
        const stack = [[y, x]];
        let size = 0;
        while (stack.length) {
            const [cy, cx] = stack.pop();
            if (cy < 0 || cy >= n || cx < 0 || cx >= m || visited[cy][cx] || land[cy][cx] === 0) continue
            visited[cy][cx] = true;
            land[cy][cx] = markNum;
            size++
            
            stack.push([cy - 1, cx]); // 상
            stack.push([cy + 1, cx]); // 하
            stack.push([cy, cx - 1]); // 좌
            stack.push([cy, cx + 1]); // 우
        }
        dict[markNum] = size;
    }
    
    for(let i=0; i<n; i++) {
        for(let j=0; j<m; j++) {
            if (land[i][j] === 1) {
                dfs(i, j);
                markNum++
            }
        }
    }
    
    let max = 0;
    for(let i=0; i<m; i++) {
        let oil = new Set();
        for(let j=0; j<n; j++) {
            if (land[j][i]) {
                oil.add(land[j][i]);
            }
        }
        
        let temp = 0;
        for(const mark of oil) temp += dict[mark]
        
        max = Math.max(max, temp)
    }
    
    return max;
}