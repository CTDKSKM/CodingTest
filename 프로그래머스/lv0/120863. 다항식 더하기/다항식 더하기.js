function solution(polynomial) {
    const values = polynomial.split(' + ');
    let consts = 0;
    let xCount = 0;
    for(const value of values){
        if(value[value.length-1]==='x'){
            xCount+=Number(value.replace('x','')||1);
            continue;
        }
        consts+=Number(value);
    }
    let answer = [];
    if(xCount > 0) {
        if (xCount===1) answer.push('x');
        else answer.push(`${xCount}x`);
    }
    if(consts!==0) answer.push(consts);
    return answer.join(' + ') || '0';
}