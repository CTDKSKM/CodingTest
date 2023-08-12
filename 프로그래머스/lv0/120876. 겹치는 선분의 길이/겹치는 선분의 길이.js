function solution(lines) {
    var answer = new Set()
    lines.sort((a,b)=>a[1]-b[1])
    for (let i=0; i<lines.length-1; i++) {
        for (let j=i+1; j<lines.length; j++) {
            const [bs, be] = lines[i]
            const [cs, ce] = lines[j]
            for(let k=cs > bs ? cs : bs; k<be && k<ce; k++) {
                answer.add(k)
            }
        }
    }
    return answer.size;
}