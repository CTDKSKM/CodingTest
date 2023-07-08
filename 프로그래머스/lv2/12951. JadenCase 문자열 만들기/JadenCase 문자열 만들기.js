function solution(s) {
    const arr = s.split(' ')
    return arr.map(item=>{
        for(let i=0; i<item.length; i++) {
            if (item[i]) {
                item = item.toLowerCase()
                item = item.slice(0, i) + item[i].toUpperCase() + item.slice(i+1)
                break
            }
        }
        return item
    }).join(' ')
}