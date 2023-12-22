
function solution(m, n, board) {
    let answer = 0;
    board = board.map((val)=>{
        const valArr = []
        val.split('').forEach(name=>valArr.push({name, check:false}))
        return valArr
    })
    while (true) {
        for(let i=0; i<m; i++) {
            for(let j=0; j<n; j++) {
                if (board[i][j]!=='*') checker(i, j, board)
            }
        }
        let temp = 0;
        board = board.map(row=>{
            return row.map(obj=>{if (obj.check) {temp++;return '*'}; return obj})
        })
        fill(m, n, board)
        console.log(temp)
        if (!temp) break
    }
    
    board.forEach(val=>{
        val.forEach(obj=>{
            obj == '*' ? answer++ : null
        })
    })
    return answer;
}
function checker(i, j, board) {
    const now = board[i][j]
    let topLeft = ['*', '*', '*']
    if (i>0 && j>0) {
        topLeft = [board[i-1][j], board[i-1][j-1], board[i][j-1]]
    }
    let topRight = ['*', '*', '*']
    if (i>0 && j<board[0].length-1) {
        topRight = [board[i-1][j], board[i-1][j+1], board[i][j+1]]
    }
    let bottomLeft = ['*', '*', '*']
    if (i<board.length-1 && j>0) {
        bottomLeft = [board[i+1][j], board[i+1][j-1], board[i][j-1]]
    }
    let bottomRight = ['*', '*', '*']
    if (i<board.length-1 && j<board[0].length-1) {
        bottomRight = [board[i+1][j], board[i+1][j+1], board[i][j+1]]
    }
    const arr = [topLeft, topRight, bottomLeft, bottomRight]
    for(let k=0; k<arr.length; k++) {
        const same = arr[k].filter(dir=>dir.name==now.name)
        if (same.length == 3) {
            now.check = true
            break
        }
    }
}
function fill(m, n, board) {
    for (let j = 0; j < n; j++) {
        for (let i = m - 1; i > 0; i--) {
            if (board[i][j] === '*' && board[i-1][j] !== '*') {
                board[i][j] = board[i-1][j];
                board[i-1][j] = '*';
                i = m; // 다시 위로 올라가서 검사하기 위해
            }
        }
    }
}

