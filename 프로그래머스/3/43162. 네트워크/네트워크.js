function solution(n, computers) {
    const seen = new Set();
    let count = 0;
    
    for(let i=0; i<n; i++) {
        if (!seen.has(i)) {
            dfs(i, computers, seen, n);
            count++
        }
    }
    
    return count;
}

function dfs(node, computers, seen, n) {
    seen.add(node);

    for (let i = 0; i < n; i++) {
        if (computers[node][i] === 1 && !seen.has(i)) {
            dfs(i, computers, seen, n);
        }
    }
}

/*
dfs.
안 본 녀석은 넣어주고, 네트워크++
*/