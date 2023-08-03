function solution(numer1, denom1, numer2, denom2) {
    const numer = numer1*denom2+numer2*denom1
    const denom = denom1*denom2
    const 최대공약수 = 최대공약수구하기(numer, denom)
    
    return [numer/최대공약수,denom/최대공약수]
}

function 최대공약수구하기(p,q) {
    if (q==0) return p;
    else return 최대공약수구하기(q, p%q)
}