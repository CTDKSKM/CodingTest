function solution(n, results) {
    // i가 이긴 사람, 진 사람을 리스트에 저장한다
    const winList = Array.from({ length: n }, () => []);
    const loseList = Array.from({ length: n }, () => []);

    for (let i = 1; i <= n; i++) {
        const win = [];
        const lose = [];

        for (let j = 0; j < results.length; j++) {
            if (results[j][0] === i && !win.includes(results[j][1])) {
                win.push(results[j][1]);
            }
            if (results[j][1] === i && !lose.includes(results[j][0])) {
                lose.push(results[j][0]);
            }
        }

        win.sort((a, b) => a - b);
        lose.sort((a, b) => a - b);

        winList[i - 1] = win;
        loseList[i - 1] = lose;
    }

    // i가 이긴 사람 리스트에 이긴 사람에게 진 사람도 포함시켜준다
    for (let i = 0; i < winList.length; i++) {
        for (let j = 0; j < winList[i].length; j++) {
            const winner = winList[i][j] - 1;
            for (let k = 0; k < winList[winner].length; k++) {
                const person = winList[winner][k];
                if (!winList[i].includes(person)) {
                    winList[i].push(person);
                }
            }
        }
    }

    // i가 진 사람 리스트에 진 사람을 이긴 사람도 포함시킨다
    for (let i = 0; i < loseList.length; i++) {
        for (let j = 0; j < loseList[i].length; j++) {
            const loser = loseList[i][j] - 1;
            for (let k = 0; k < loseList[loser].length; k++) {
                const person = loseList[loser][k];
                if (!loseList[i].includes(person)) {
                    loseList[i].push(person);
                }
            }
        }
    }

    // 순위를 알 수 있는 사람은 이긴 사람 + 진 사람 합이 n-1인 경우다
    let answer = 0;

    for (let i = 0; i < n; i++) {
        if (winList[i].length + loseList[i].length === n - 1) {
            answer++;
        }
    }

    return answer;
}
