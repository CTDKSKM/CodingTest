function solution(maps) {
    const answer = [];
    const visited = Array.from({length: maps.length}, ()=>Array(maps[0].length).fill(false))
    const dy = [1,-1,0,0]
    const dx = [0,0,1,-1]
    let count = 0;
    let sum = 0;
    
    const dfs = (y, x) => {
        visited[y][x] = true
        sum += +maps[y][x]

        for(let i=0; i<4; i++) {
            const ny = y+dy[i]
            const nx = x+dx[i]
            
            if (ny >= 0 && nx >= 0 && ny < maps.length && nx < maps[0].length && maps[ny][nx] !== 'X' && !visited[ny][nx]) {
                dfs(ny,nx)
            }

        }
        
    }
    
    maps.forEach((row,y)=>{
        [...row].forEach((val,x)=>{
            if (val !== 'X' && !visited[y][x]) {
                count++
                if (sum) {
                    answer.push(sum)
                    sum=0
                }
                dfs(y, x)
            }
        })
    })
    
    if (sum) answer.push(sum)
    return count ? answer.sort((a,b)=>a-b) : [-1];
}
/*
dfs && dp
처음가는 곳+숫자 => count++
dp는 어떻게?
*/