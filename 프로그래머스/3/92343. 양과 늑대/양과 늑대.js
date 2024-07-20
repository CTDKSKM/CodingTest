function solution(info, edges) {
    let answer = 0;
    const n = info.length;
    const tree = {};
    const alps = Array.from(Array(n), (_, i) => String.fromCharCode(97 + i));
    
    const convertNumToAlp = (num) => alps[num]
    
    edges = edges.map(([a,b])=>([convertNumToAlp(a),convertNumToAlp(b)]))
    
    edges.forEach((edge) => {
        const [p, c] = edge;
        if (!tree[c]) tree[c] = [];
        if (!tree[p]) tree[p] = [];
        tree[p].push(c);
    })
    
    const possibles = [...tree['a']]
    const findComb = (sheep, wolves, str, possible) => {
        if (sheep <= wolves) return;
        
        answer = Math.max(answer, sheep);
        
        for(let i=0; i<n; i++) {
            const nextStr = convertNumToAlp(i);
            
            if (str.includes(nextStr) || !possible.includes(nextStr)) continue
            
            info[i] 
                ? findComb(sheep, wolves+1, str+nextStr, possible.slice().concat(...tree[nextStr])) 
                : findComb(sheep+1, wolves, str+nextStr, possible.slice().concat(...tree[nextStr]))
        }
    }
    findComb(1, 0, 'a', possibles);
    
    return answer;
}