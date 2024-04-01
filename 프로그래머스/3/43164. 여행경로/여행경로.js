function solution(tickets) {
    const graph = {};
    const remain = {};

    tickets.forEach(([from, to])=>{
        if (!graph[from]) graph[from] = [];
        graph[from].push(to);
        if (!remain[`${from}=>${to}`]) remain[`${from}=>${to}`] = 0;
        remain[`${from}=>${to}`]++;
    })

    const dfs = (node, path) => {
        if (path.length === tickets.length+1) return path;
        if (!graph[node]) return null;
        graph[node].sort(comp);
        for(let i=0; i<graph[node].length; i++) {
            const nextNode = graph[node][i];
            if (!remain[`${node}=>${nextNode}`]) continue;
            remain[`${node}=>${nextNode}`]--;
            const result = dfs(nextNode, [...path, nextNode])
            if (result) return result
            remain[`${node}=>${nextNode}`]++;
        }

        return null
    }

    return dfs('ICN', ['ICN'])
}

function comp(a, b) {
    return a > b ? 1 : -1
}