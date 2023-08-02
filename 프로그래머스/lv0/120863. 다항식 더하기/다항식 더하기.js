function solution(polynomial) {
    if (!polynomial.includes('x')) {
        return polynomial.split(' + ').reduce((acc,cur)=>+acc + +cur) + '';
    }
    let 일차항부 = polynomial.split(' + ').filter(v=>v.includes('x')).map(v=>v=='x' ? '1' : v.slice(0,v.length-1)).reduce((acc,cur)=>+acc + +cur) + 'x';
    if (일차항부=="1x") 일차항부 = "x"
    const 상수항부 = polynomial.split(' + ').filter(v=>!v.includes('x')).reduce((acc,cur)=>+acc + +cur,0);

    return 상수항부 ? 일차항부 + ' + ' + 상수항부 : 일차항부
}