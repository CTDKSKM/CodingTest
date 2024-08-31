function solution(land) {
    let answer = 0;
    let key = 1;
    var memo = new Map();

    for (let i = 0; i < land.length; i++) {
        for (let j = 0; j < land[i].length; j++) {
            if (land[i][j] === 1) memo.set(++key, dfsAndGetSearchCount(land, [i, j], key));
        }
    }
    for (let i = 0; i < land[0].length; i++) {
        var count = 0;
        var set = new Set();

        for (let row of land) {
            set.add(row[i]);
        }
        for (let e of set) {
            if (e > 0) count += memo.get(e);
        }
        if (count > 0) answer = Math.max(answer, count);
    }
    return answer;
}

function dfsAndGetSearchCount(array, start, key) {
    let count = 1;
    let stack = [start];
    array[start[0]][start[1]] = key;

    while (stack.length > 0) {
        let outed = stack.pop();

        for (let [x, y] of [[outed[0] - 1, outed[1]], [outed[0], outed[1] + 1], [outed[0] + 1, outed[1]], [outed[0], outed[1] - 1]]) {
            if (x < 0 || x >= array.length || y < 0 || y >= array[0].length) continue;
            if (array[x][y] == 1) {
                array[x][y] = key;
                count++;
                stack.push([x, y]);
            }
        }
    }
    return count;
}