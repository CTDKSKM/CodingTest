function solution(orders, course) {
    const answer = [];

    course.forEach(needNum => {
        const dict = {};
        const len = orders.length;
        let max = 2;

        orders.forEach(order => {
            const baseStr = [...order].sort();
            if (baseStr.length < needNum) return;

            const temp = [];
            const seen = Array(baseStr.length).fill(false);

            dfs(0, needNum, '', baseStr, seen, temp, 0);
            temp.forEach(combo => {
                dict[combo] ? dict[combo].push(order) : dict[combo] = [order];
            });
        });

        for (const combo in dict) {
            max = Math.max(max, dict[combo].length);
        }

        for (const combo in dict) {
            if (dict[combo].length === max) {
                answer.push(combo);
            }
        }
    });

    return answer.sort();
}

function dfs(n, targetNum, str, baseStr, seen, temp, now) {
    if (n === targetNum) {
        temp.push(str);
        return;
    }

    for (let i = now; i < baseStr.length; i++) {
        if (seen[i]) continue;

        seen[i] = true;
        dfs(n + 1, targetNum, str + baseStr[i], baseStr, seen, temp, i);
        seen[i] = false;
    }
}
