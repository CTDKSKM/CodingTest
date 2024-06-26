function solution(k, ranges) {
    const answer = [];
    const y = [];
    
    while ( k !== 1 ) {
        y.push(k);
        k % 2 == 0 ? k = k/2 : k = (k*3) + 1;
    }
    
    y.push(1);
    
    ranges.forEach(([a, b])=>{
        const max = y.length-1 + b;
        let sum = 0;

        for(let i=a; i<max; i++) {
            sum += (y[i] + y[i+1]) / 2;
        }
        
        if (a > max) sum = -1;
        
        answer.push(sum);
    })
    return answer;
}