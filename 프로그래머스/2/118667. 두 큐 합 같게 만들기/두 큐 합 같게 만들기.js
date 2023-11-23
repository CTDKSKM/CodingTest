function solution(queue1, queue2) {
    const L = queue1.reduce((a,c)=>a+c,0)
    const R = queue2.reduce((a,c)=>a+c,0)
    const arr = L > R ? queue2.concat(queue1) : queue1.concat(queue2)
    const goal = arr.reduce((a,c)=>a+c,0) / 2
    let left = 0;
    let right = queue1.length-1;
    let count = 0;
    let sum = L > R ? R : L;

    while (count <= queue1.length*4) {
        if (sum === goal) return count
        
        if (sum > goal) {sum-=arr[left++];}
        else if (sum < goal) {sum+=arr[++right];}

        count++
    }
    
    return -1;
}

