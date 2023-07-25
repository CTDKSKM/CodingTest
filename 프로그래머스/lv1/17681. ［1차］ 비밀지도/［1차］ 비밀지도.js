function solution(n, arr1, arr2) {
    const a1 = [];
    const a2 = [];
    for(let i = 0; i<n; i++) {
        a1.push(toBinary(arr1[i],n))
        a2.push(toBinary(arr2[i],n))
    }
    return a1.map((v)=>toStr(v, 0, 7, null)).map((v,idx)=>+v + +a2[idx] + '').map(v=>toStr(v, 7,' ', '#'))
}

function toBinary(num,n) {
    let temp = '';
    for(let i=n-1; i>=0; i--) {
        num-(2**i) >= 0 ? temp+='1' : temp+='0'
        num %= (2**i)
    }
    return temp
}

function toStr(value, p1, p2, p3) {
    let temp = '';
    for(let a of value) {
        a == p1 ? temp+=p2 : temp+=p3 ?? a
    }
    return temp
}