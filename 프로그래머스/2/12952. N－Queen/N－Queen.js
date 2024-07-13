function solution(n) {
    let answer = 0;
    const cols = new Array(n).fill(false);
    const diag1 = new Array(2 * n - 1).fill(false);
    const diag2 = new Array(2 * n - 1).fill(false);

    const backtrack = (row) => {
        if (row === n) {
            answer++;
            return;
        }

        for (let col = 0; col < n; col++) {
            if (cols[col] || diag1[row - col + n - 1] || diag2[row + col]) {
                continue;
            }

            cols[col] = diag1[row - col + n - 1] = diag2[row + col] = true;
            backtrack(row + 1);
            cols[col] = diag1[row - col + n - 1] = diag2[row + col] = false;
        }
    };

    backtrack(0);
    return answer;
}