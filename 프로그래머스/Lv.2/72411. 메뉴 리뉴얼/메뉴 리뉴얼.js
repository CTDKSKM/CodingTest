function solution(orders, course) {
    const answer = [];
    course.forEach((needNum, comboIndex)=>{
        const tempArr = []
        const dict = {};
        const len = orders.length
        let max = 2;
        
        for(let i=0; i<len; i++) {
            const baseStr = [...orders[i]].sort().join('')
            if (baseStr.length < needNum) continue
            const temp = []
            const seen = Array(baseStr.length).fill(false)
            
            const mix = dfs(0, needNum, '', baseStr, seen, temp, 0)
            tempArr.push(temp)
        }
        tempArr.forEach((possibleCombo)=>{
            possibleCombo.forEach((combo,idx)=>{
                dict[combo] ? dict[combo].push(idx) : dict[combo] = [idx]
            })
        })
        for(const combo in dict) {
            max = Math.max(max, dict[combo].length)
        }
        for(const combo in dict) {
            if (dict[combo].length === max) answer.push(combo)
        }
    })
    return answer.sort()
}
function dfs(n, targetNum, str, baseStr, seen, temp, now) {
    if (n === targetNum) {
        return temp.push(str)
    }
    
    for(let i=now; i<baseStr.length; i++) {
        if (seen[i]) continue
        
        seen[i] = true
        dfs(n+1, targetNum, str+baseStr[i], baseStr, seen, temp, i)
        seen[i] = false
    }
}
/*
orders.length = 사람수,
orders[i] = menu
course = 원하는 콤보 수
*/