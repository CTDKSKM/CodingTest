function solution(data, col, row_begin, row_end) {
    let answer = 0;
    
    data.sort((a,b)=>{
        return a[col - 1] - b[col - 1] || b[0] - a[0]
    })
    
    for(let i=row_begin; i<=row_end; i++) {
        answer ^= data[i-1].reduce((a,c)=>a+c%i, 0)
    }
    
    return answer
}