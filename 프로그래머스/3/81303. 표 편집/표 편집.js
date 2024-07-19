function solution(n, k, cmd) {
    const linkedList = Array(n).fill(0).map((_, idx) => ({
        prev: idx - 1,
        next: idx + 1,
    }));
    linkedList[0].prev = null;
    linkedList[n - 1].next = null;

    let now = k;
    const deleted = [];

    cmd.forEach((str) => {
        const [act, num] = str.split(' ');
        if (act === 'D') {
            let cnt = +num;
            while (cnt--) {
                now = linkedList[now].next;
            }
        }
        if (act === 'U') {
            let cnt = +num;
            while (cnt--) {
                now = linkedList[now].prev;
            }
        }
        if (act === 'C') {
            deleted.push(now);
            const { prev, next } = linkedList[now];
            if (prev !== null) linkedList[prev].next = next;
            if (next !== null) linkedList[next].prev = prev;

            now = next !== null ? next : prev;
        }
        if (act === 'Z') {
            const restored = deleted.pop();
            const { prev, next } = linkedList[restored];
            if (prev !== null) linkedList[prev].next = restored;
            if (next !== null) linkedList[next].prev = restored;
        }
    });

    const result = Array(n).fill('O');
    deleted.forEach(idx => result[idx] = 'X');
    return result.join('');
}
