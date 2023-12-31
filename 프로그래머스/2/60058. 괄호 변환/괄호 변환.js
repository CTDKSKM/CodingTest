function solution(p) {
    if (!p) return ''
    const change = {
        ')' : '(',
        '(' : ')',
    }
    let [u, v] = split(p)
    
    if (u[0] == '(') return u + solution(v)
    else return '(' + solution(v) + ')' + [...u.slice(1,-1)].map(val=>change[val]).join('')
}

function split(p) {
    const stack = [p[0]]
    const pair = {
        ')' : '(',
        '(' : ')'
    }
    for(let i=1; i<p.length; i++) {
        if (p[i] === pair[stack.at(-1)]) {
            stack.pop()
            if (!stack.length) {
                return [p.slice(0, i+1), p.slice(i+1)]
            }
        }
        else {
            stack.push(p[i])
        }
    }
}