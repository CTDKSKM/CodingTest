function solution(N, stages) {
    return Array(N).fill(0).map((_,index)=>{
        const 도달수 = stages.filter(stage => stage >= index+1).length
        const 클리어못한수 = stages.filter(stage => stage == index+1).length
        return [index+1, (도달수-클리어못한수)/도달수]
    }).sort((a,b)=>a[1]-b[1]).map(val=>val[0])
}
