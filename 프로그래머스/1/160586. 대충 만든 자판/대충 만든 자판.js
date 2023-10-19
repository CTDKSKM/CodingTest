function solution(keymap, targets) {
    var answer = [];
    
    targets.forEach(target=>{
        let sum = 0;
        let flag = true
        
        for(let i=0; i<target.length; i++) {
            let temp = 0;
            
            keymap.forEach((key,idx)=>{
                if (key.includes(target[i])) {
                    if (temp == 0 || temp > key.indexOf(target[i]) + 1) {
                        temp = key.indexOf(target[i]) + 1
                    }
                }
            })
            
            temp ? sum+=temp : flag = false
        }
        
        flag ? answer.push(sum) : answer.push(-1)
    })
    
    return answer;
}