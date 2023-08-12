function solution(lines) {
    let dist = new Set();
    for(let i = 0; i < lines.length; i++) {
        for(let j = i+1; j < lines.length; j++) {
            let [curX, curY] = lines[i];
            let [nextX, nextY] = lines[j];
            if(Math.min(curY, nextY) > Math.max(curX, nextX)) {
                for(let k = Math.max(curX, nextX); k < Math.min(curY, nextY); k++) {
                    dist.add(k)
                }
            }
        }
    }
    return dist.size
}