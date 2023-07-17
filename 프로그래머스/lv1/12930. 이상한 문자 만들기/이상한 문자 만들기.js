function solution(s) {
    return s.split(' ').map(str=>{
        return [...str].map((v,idx)=> idx%2 == 0 ? v = v.toUpperCase() : v.toLowerCase() ).join('')
    }).join(' ')
}