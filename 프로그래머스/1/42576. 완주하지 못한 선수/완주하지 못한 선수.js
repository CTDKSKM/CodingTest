const solution = (participant, completion) => {
    const hash = new Map()
    participant.forEach((val)=>{
        hash.set(val, hash.get(val) ? hash.get(val) + 1 : 1)
    })
    completion.forEach(val=>{
        hash.set(val, hash.get(val) - 1)
    })
    const iterator = hash[Symbol.iterator]()
    for (const item of iterator) {
        if (hash.get(item[0])) return item[0]
    }
}