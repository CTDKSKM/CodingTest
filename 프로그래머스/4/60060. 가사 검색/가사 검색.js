const reverseStr = str => str.split('').reverse().join('')
function solution (words, queries) {
    const lens = {}
    const [pre, suf] = [words, words.map(reverseStr)].map((words, i) => {
        const root = {}
        words.forEach(w => {
            let [o, len] = [root, w.length]
            if (i === 0) lens[len] = (lens[len] || 0) + 1
            do {
                const node = o[w[0] + len] || (o[w[0] + len] = { cnt: 0, next: {} })
                node.cnt++
                o = node.next
                w = w.slice(1)
            } while (w)
        })
        return root
    })
    return queries.map(q => q[0] === '?' ? [suf, reverseStr(q)] : [pre, q]).map(([o, q]) => {
        let len = q.length
        if (q[0] === '?') return lens[len] || 0
        let cnt = 0
        do {
            const node = o[q[0] + len]
            if (!node) return 0
            cnt = node.cnt
            o = node.next
        } while ((q = q.slice(1))[0] !== '?')
        return cnt
    })
}