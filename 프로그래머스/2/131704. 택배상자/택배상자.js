function solution(order) {
    let k = [], c = 1, count = 0
    for(let i = 0; i < order.length; ++i){
        let t = order[i]
        if(k.length && k[k.length-1]==t){
            k.pop()
            ++count
            continue
        }
        while(t!=c){
            k.push(c)
            ++c
            if(c>order.length) return count
        }
        ++c
        ++count
    }
    return count
}
/*

*/