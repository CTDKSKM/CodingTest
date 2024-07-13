function solution(n) {
    let answer = 0;
    const board = new Array(n).fill().map(()=>new Array(n).fill(0))
    const fill = (arr, y, x) => {
        let cnt = 1;
        while (y+cnt < n) {
            const ny = y+cnt;
            const r = x+cnt;
            const l = x-cnt;
            //아래
            if (arr[ny][x] == 0) arr[ny][x] = 2;
            //대각
            if (r < n && arr[ny][r] == 0) arr[ny][r] = 2;
            if (l >= 0 && arr[ny][l] == 0) arr[ny][l] = 2;
            
            cnt++
        }
    }
    
    const set = (arr, y, x, num) => {
        if (y === n-1) {
            answer++
            return
        }
        arr[y][x] = 1;
        fill(arr, y, x);
        
        for(let i=0; i<n; i++) {
            if (arr[y+1][i] !== 0) continue
            set(arr.slice().map((_,idx)=>arr[idx].slice()), y+1, i, num+1);
        }
    }
    
    for(let i=0; i<n; i++) {
        set(board.slice().map((_,i)=>board[i].slice()), 0, i, 0);
    }
    
    return answer;
}