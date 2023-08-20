function solution(elements) {
    var answer = new Set();
    const arr = [...elements, ...elements]
    for (let i=0; i<elements.length; i++) {
        for(let j=0; j<elements.length; j++) {
            const temp = arr.slice(j,j+i)

            answer.add(temp.reduce((acc,cur)=>acc+cur,0))
        }
    }
    
    return answer.size;
}