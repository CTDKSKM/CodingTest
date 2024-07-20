function solution(info, edges) {
    var answer = 0;
    const tree = Array.from({ length: info.length }, () => new Array());
    edges.forEach((edge) => {
        const [s, e] = edge;
        tree[s].push(e);
    });

    function DFS(node, lamb_count, wolf_count, defer_set = new Set()) {
        if (lamb_count <= wolf_count) return;
        answer = Math.max(answer, lamb_count);
        for (let next of defer_set) {
            let temp_set = new Set(defer_set);
            temp_set.delete(next);
            for (let n of tree[next]) {
                temp_set.add(n);
            }
            if (info[next] === 0) {
                DFS(next, lamb_count + 1, wolf_count, temp_set);
            } else {
                DFS(next, lamb_count, wolf_count + 1, temp_set);
            }
        }
    }

    const set = new Set();
    for (let next of tree[0]) {
        set.add(next);
    }
    DFS(0, 1, 0, set);
    return answer;
}
