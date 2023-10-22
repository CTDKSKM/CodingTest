function solution(begin, target, words) {
    const seen = []
    const queue = [[begin, 0]]
    let flag = 0;
    let ans;
    while(queue.length) {
        const [now,count] = queue.shift()

        if (now == target) {
            flag = 1;
            ans = count
            break
        }
        for(let i=0; i<words.length; i++) {
            let temp = 0;
            
            for(let j=0; j<target.length; j++) {
                now[j] == words[i][j] ? temp++ : false
            }
            if (temp == begin.length-1) {
                if (!seen.includes(words[i])) {
                    seen.push(words[i])
                    queue.push([words[i],count + 1])
                }
            }
        }
    }
    if (flag) return ans
    else return 0
    
}