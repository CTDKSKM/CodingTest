function solution(k, tangerine) {
    let answer = 0;
    let counter = []
    tangerine.forEach(v=>{
        counter[v] ? counter[v]++ : counter[v]=1
    })
    counter = counter.filter(v=>v!=null).sort((a,b)=>a-b)
    while (k>0) {
        const temp = counter.pop()
        answer++
        k -= temp
    }

    return answer
}