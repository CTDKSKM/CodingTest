function solution(n) {
    let answer = 0;
    const board = Array.from({ length: n }, () => Array(n).fill(0));
    const fill = (arr, y, x) => {
        for (let i = 1; y + i < n; i++) {
            arr[y + i][x] = 2; // 아래쪽
            if (x + i < n) arr[y + i][x + i] = 2; // 우하향 대각선
            if (x - i >= 0) arr[y + i][x - i] = 2; // 좌하향 대각선
        }
    }
    
    const set = (arr, y, x) => {
        if (y === n-1) {
            answer++
            return
        }
        const newArr = arr.map(row => row.slice());
        newArr[y][x] = 1;
        fill(newArr, y, x);
        
        for (let i = 0; i < n; i++) {
            if (newArr[y + 1][i] === 0) {
                set(newArr, y + 1, i);
            }
        }
    }
    
    for(let i=0; i<n; i++) {
        set(board.slice().map((_,i)=>board[i].slice()), 0, i);
    }
    
    return answer;
}