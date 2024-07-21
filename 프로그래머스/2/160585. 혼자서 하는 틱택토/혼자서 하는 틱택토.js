function solution(board) {
    let dict = {'O': 0, 'X': 0, '.': 0}
    const LTtoRD = [];
    const RTtoLD = [];
    
    board.forEach((str, row)=>{
        [...str].forEach((v,col)=>{
            dict[v]++
            if (row == col) LTtoRD.push(v);
            if (row + col == 2) RTtoLD.push(v);
        })
    })
    
    if (dict['X'] > dict['O'] || dict['O'] - dict['X'] > 1) return 0;
    
    const check = (arr) => {
        if ([...arr].reduce((a,b)=>a == b ? a : a+b, '').length == 1) {
            if (arr[0] == 'O' && dict['O'] !== dict['X'] + 1) return false
            else if (arr[0] == 'X' && dict['X'] !== dict['O']) return false
        }
        return true
    }
    
    //가로
    for(let i=0; i<3; i++) {
        if (check(board[i])) continue;
        return 0;
    }
    //세로
    for(let i=0; i<3; i++) {
        const temp = [];
        for(let j=0; j<3; j++) {
            temp.push(board[j][i])
        }
        
        if (check(temp)) continue;
        return 0;
    }
    //대각
    if (check(LTtoRD) && check(RTtoLD)) return 1
    else return 0;
}