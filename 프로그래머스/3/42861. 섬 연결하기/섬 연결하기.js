function solution(n, costs) {
    let answer = 0;
    let count = 0;
    costs = costs.sort((a,b)=>b[2]-a[2])
    const parent = Array(n).fill().map((_,idx)=>[idx])
    while(costs.length) {
        const [from, to, cost] = costs.pop();
        if (!parent[from].some(v=>parent[to].includes(v)) || !parent[to].some(v=>parent[from].includes(v))) {
            const set = new Set([...parent[from], ...parent[to]])
            const unionParent = Array(...set)
            parent[from] = unionParent;
            parent[to] = unionParent;
            unionParent.forEach(v=>{
                parent[v] = unionParent
            });
            answer += cost;
            count++
        }
        if (count+1 === n) break
    }
    return answer;
}
function unionParent() {
    
}
/*
다익스트라->안쓰는루트 제외->각 노드의 최종값에서 사용하는 루트 횟수-1비용만큼 최종 계산값에서 제외. 

=> 실패. why? 해당 문제는 "특정" 노드에서 다른 특정 노드로 가는 최단 거리를 구하는 것이 아닌, "모든" 노드들이 연결될 때 그때의 최소 비용을 구하는 것이기 때문. 
(A 에서 B로 3의 비용으로 연결할수있고, 이미 A와 연결된 C에서 B로 2의 비용으로 연결할수있다면 반드시 A에서 B로 가야하는게 아니라면 이미 연결된 C를 이용하면 2의 비용으로 갈 수 있음.)

따라서 최소 비용을 구하는 최소 신장 트리 알고리즘을 사용해야 함.
*/