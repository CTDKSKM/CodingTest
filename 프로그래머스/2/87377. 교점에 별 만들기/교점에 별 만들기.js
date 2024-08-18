function getComb(n) {
    const ret = [];
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j <= n; j++) {
            ret.push([i, j]);
        }
    }
    return ret;
}

function solution(line) {
    const set = new Set();
    const comb = getComb(line.length - 1);

    for (let [j, k] of comb) {
        const [A, B, E] = line[j];
        const [C, D, F] = line[k];
        const denom = A * D - B * C;

        // 분모가 0이 되는 경우는 선이 평행하거나 일치하는 경우이므로 제외
        if (denom === 0) continue;

        const xNumer = B * F - E * D;
        const yNumer = E * C - A * F;
        const x = xNumer / denom;
        const y = yNumer / denom;

        // x와 y가 정수인 경우에만 Set에 추가
        if (Number.isInteger(x) && Number.isInteger(y)) {
            set.add(`${x},${y}`);
        }
    }

    const points = Array.from(set).map(point => point.split(',').map(Number));
    const xValues = points.map(([x, _]) => x);
    const yValues = points.map(([_, y]) => y);

    const xMin = Math.min(...xValues);
    const xMax = Math.max(...xValues);
    const yMin = Math.min(...yValues);
    const yMax = Math.max(...yValues);

    const answer = Array(yMax - yMin + 1).fill().map(() => Array(xMax - xMin + 1).fill('.'));
    
    for (const [x, y] of points) {
        answer[yMax - y][x - xMin] = '*';
    }

    return answer.map(row => row.join(''));
}
