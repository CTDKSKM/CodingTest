function solution(answers) {
    const arr = [0,0,0];
    const sp1 = [1,2,3,4,5]
    const sp2 = [2,1,2,3,2,4,2,5]
    const sp3 = [3,3,1,1,2,2,4,4,5,5]
    for(let i=0; i<answers.length; i++) {
        if (sp1[i%5] == answers[i]) arr[0]++
        if (sp2[i%8] == answers[i]) arr[1]++
        if (sp3[i%10] == answers[i]) arr[2]++
    }
    
    return arr.map(v=>v == Math.max(...arr) ? v : -1).map((v,idx)=>v!=-1 ? idx+1 : v).filter(v=>v!=-1)
}