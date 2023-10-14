function solution(scoville, K) {
    let count = 0;
    scoville.sort((a, b) => b - a);
    
    const mixed = [];
    let m_i = 0;
    let min = 0;
    let secondMin = 0;
    let flag = 0;
    
    const under_K = [];
    for(let i = 0 ; i < scoville.length ; ++i){
        if(scoville[i] < K){
            under_K.push(scoville[i])
        }
        else{
            flag = 1
        }
    }    
    
    while (1) {
        if (mixed[m_i] != undefined) {
            if (under_K.length) {
                if (under_K.at(-1) < mixed[m_i]) min = under_K.pop()
                else {
                    min = mixed[m_i]
                    m_i++
                }
            }
            else {
                min = mixed[m_i]
                m_i++
            }
        }
        else if (under_K.length) min = under_K.pop()
        else break
        
        if (mixed[m_i] != undefined) {
            if (under_K.length) {
                if (under_K.at(-1) < mixed[m_i]) secondMin = under_K.pop()
                else {
                    secondMin = mixed[m_i]
                    m_i++
                }
            }
            else {
                secondMin = mixed[m_i]
                m_i++
            }
        }
        else {
            if (under_K.length) secondMin = under_K.pop()
            else {
                count++
                break
            }
        }
        
        if(min+secondMin*2 < K){
            mixed.push(min+secondMin*2)
        }
        else flag = 1

        count++
        
    }

    if (!flag) return -1;
    return count;
}
