function solution(board) {
    let n = board.length;
    let zero = 0;
    let bomb = 0;
    let answer = 0;

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] == 1) {
                bomb++;
            } else {
                zero++;
            }
        }
    }

    if (bomb == n * n) {
        return 0;
    }

    if (zero == n * n) {
        return n * n;
    }

    // // 지뢰 주변 8곳 위험지대로 변환
    const bombFunc = (i, j) => {
        // console.log(`${i}배열, ${j}요소`)
        // console.log(`${i - 1}배열, ${j -1}요소`)

        // 지뢰가 있는 가운데 배열
        if (board[i][j]) {
            board[i][j] = "*";
        }
        if (board[i][j - 1] != undefined && board[i][j - 1] != 1) {
            board[i][j - 1] = "*";
        }
        if (board[i][j + 1] != undefined && board[i][j + 1] != 1) {
            board[i][j + 1] = "*";
        }

        // 지뢰가 있는 위쪽 배열
        if (board[i - 1] != undefined) {
            if (board[i - 1][j - 1] != undefined && board[i - 1][j - 1] != 1) {
                board[i - 1][j - 1] = "*";
            }
            if (board[i - 1][j] != 1) {
                board[i - 1][j] = "*";
            }
            if (board[i - 1][j + 1] != undefined && board[i - 1][j + 1] != 1) {
                board[i - 1][j + 1] = "*";
            }
        }

        // 지뢰가 있는 아래쪽 배열
        if (board[i + 1] != undefined) {
            if (board[i + 1][j - 1] != undefined && board[i + 1][j - 1] != 1) {
                board[i + 1][j - 1] = "*";
            }
            if (board[i + 1][j] != 1) {
                board[i + 1][j] = "*";
            }
            if (board[i + 1][j + 1] != undefined && board[i + 1][j + 1] != 1) {
                board[i + 1][j + 1] = "*";
            }
        }
        return (
            n * n - (board.join("").split(",").join("").split("*").length - 1)
        );
    };

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] == 1) {
                answer = bombFunc(i, j);
            }
        }
    }
    return answer;
}