function solution(cacheSize, cities) {
    var answer = 0;
    let cache = []
    for (let i=0; i<cities.length; i++) {
        if (cache.includes(cities[i].toLowerCase())) {
            const index = cache.indexOf(cities[i].toLowerCase())
            cache = cache.slice(0, index).concat(cache.slice(index+1))
            
            answer += 1
        } else {
            answer += 5
        }
        if (cacheSize) {
            if (cache.length >= cacheSize) {
                cache.shift()
                cache.push(cities[i].toLowerCase())
            } else {
                cache.push(cities[i].toLowerCase())
            }
        }
        
    }
    return answer;
}
