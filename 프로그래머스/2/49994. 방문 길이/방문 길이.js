function solution(dirs) {
    const visited = new Set();
    let user = {
        x: 0,
        y: 0
    };
    const move = {
        U: [0, 1],
        D: [0, -1],
        L: [-1, 0],
        R: [1, 0]
    };

    for (let i = 0; i < dirs.length; i++) {
        const oldX = user.x
        const oldY = user.y
        const [x, y] = move[dirs[i]];
        if (oldX + x > 5 || oldX + x < -5 || oldY + y > 5 || oldY + y < -5) continue
        const newX = oldX + x;
        const newY = oldY + y;
        user = { x: newX, y: newY };
        visited.add(`${oldX}${oldY}${newX}${newY}`);
        visited.add(`${newX}${newY}${oldX}${oldY}`);
    }

    return Math.floor(visited.size / 2);
}