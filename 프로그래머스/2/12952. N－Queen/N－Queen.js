function solution(n) {
  let count = 0;

  function isSafe(board, row, col) {
    for (let i = 0; i < row; i++) {
      if (board[i][col] === 1) {
        return false;
      }
    }

    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === 1) {
        return false;
      }
    }

    for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === 1) {
        return false;
      }
    }

    return true;
  }

  function solveNQueens(board, row) {
    if (row === n) {
      count++;
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isSafe(board, row, col)) {
        board[row][col] = 1;
        solveNQueens(board, row + 1);
        board[row][col] = 0;
      }
    }
  }

  const board = new Array(n).fill().map(() => new Array(n).fill(0));

  solveNQueens(board, 0);

  return count;
}