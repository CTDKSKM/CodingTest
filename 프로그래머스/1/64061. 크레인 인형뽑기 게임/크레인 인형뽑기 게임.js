function solution(board, moves) {
    var answer = 0;
    const stack = []
    moves.forEach((move)=>{
        for(let i=0; i<board.length; i++) {
            if (board[i][move-1]) {
                if (stack.at(-1) == board[i][move-1]) {
                    stack.pop()
                    answer += 2
                }
                else stack.push(board[i][move-1])
                
                board[i][move-1] = 0
                break
            }
        }
    })
    
    return answer;
}