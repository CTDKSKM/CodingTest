function solution(n) {
    const arr = []
    const direction = [[1,0],[0,1],[-1,-1]]
    let sign = 0
    let now = [-1, 0]
    let count = 1
    
    for(let i=1; i<=n; i++) {
        arr.push(Array.from({length: i}, ()=>0))
    }
    
    for(let i=arr.length; i>0; i--) {
        for(let j=0; j<i; j++) {
            const [dx, dy] = direction[sign%3]
            now[0] += dx
            now[1] += dy
            const [x, y] = now
            arr[x][y] = count++
        }
        sign++
    }

    return arr.flat();
}

/*
to bottom => to right => to top => to bottom => ...
*/