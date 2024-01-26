function solution(user_id, banned_id) {
    const arr = [];
    
    banned_id.forEach((target)=>{
        const possibleId = user_id.filter(username=>{
            if (username.length !== target.length) return false
            
            for(let i=0; i<target.length; i++) {
                if (target[i] === '*') continue
                if (target[i] !== username[i]) return false
            }
            
            return true
        })
        
        arr.push(possibleId)
    })
    const answer = new Set()
    dfs(0, arr.length, [], arr, answer);
    return answer.size;
}
function dfs(n, targetN, temp, arr, answer) {
    if (n===targetN) {
        answer.add(temp.slice().sort().join(''))
        return
    }
    
    for(let i=0; i<arr[n].length; i++) {
        if (temp.includes(arr[n][i])) continue;
        temp.push(arr[n][i])
        dfs(n+1, targetN, temp, arr,answer);
        temp.pop()
    }
}