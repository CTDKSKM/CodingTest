function solution(s) {
    var answer = [];
    s.slice(1,-1).split('{').join('').split('},').sort((a,b)=>a.length-b.length).map(v=>v.split(',')).map(v=>{
        v.forEach(val=>{
            if (val.includes('}')) val=val.slice(0,-1);
            answer.includes(+val) ? false : answer.push(+val) 
        })
    })
    return answer
}