function solution(gems) {
    let answer = [1, gems.length];
    const total = new Set(gems).size;
    const now = new Map();
    let [left, right] = [1, 1];
    
    gems.forEach((gem, i) => {
        now.set(gem, (now.get(gem) || []).concat(i));
        right = i + 1;
        
        if (now.size === total) {
            while (now.get(gems[left - 1]).length > 1) {
                now.set(gems[left - 1], now.get(gems[left - 1]).slice(1));
                left += 1;
            }
            
            const currentLength = right - left;
            if (answer[1] - answer[0] > currentLength) {
                answer = [left, right];
            }
        }
    });
    
    return answer;
}