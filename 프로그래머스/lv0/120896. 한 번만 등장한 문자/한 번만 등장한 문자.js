function solution(s) {
    var filterStr = '';
    let arr = [...s].sort()
    for(let i=0; i<s.length; i++) {
        let element = arr.splice(i,1)
        arr.find(v=>v==element) ? filterStr += element : false

    }
    return [...s].filter(v=>!filterStr.includes(v)).sort().join('')
}

