function solution(N, stages) {
    let records = [];
    let i;
    for (i = 0; i<N+1; i++) records.push([0,0,i+1]); //수, 실패율, 스테이지
    stages.forEach(num => records[num-1][0]++);
    let ppl=0;
    for (i=0; i<N+1; i++){
        records[i][1] = records[i][0]/(stages.length-ppl);
        ppl+=records[i][0];
    }
    return records.slice(0,N).sort((a,b) => b[1]-a[1]).map(el => el[2]);
}
