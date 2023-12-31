const solution = (p) => {
    if (!p) return ''
    
    let [u, v] = split(p)
    
    if (u[0] == '(') return u + solution(v)
    else return '(' + solution(v) + ')' + change(u)
}

const split = (p) => {
    let [cnt, idx] = [0, 0]

    do {
        cnt += (p[idx++] === ')' ? -1 : 1);
    } while (cnt !== 0)
        
    return [p.slice(0, idx), p.slice(idx)]
}
    
const change = (u) => [...u.slice(1,-1)].map(val=>val === ')' ? '(' : ')').join('')