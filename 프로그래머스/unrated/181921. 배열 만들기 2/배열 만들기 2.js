
function solution(l, r) {
    const arr = Array.from(String(r)).fill(false)
    arr[arr.length-1] = true
    const result = []
    while (!arr.every(v => v === false)) {
        const num = Number(arr.map(v => v ? 5 : 0).join(''))
        if (num >= l && num <= r) result.push(num)
        for (let i = arr.length-1; i >= 0; i -= 1) {
            arr[i] = !arr[i]
            if (arr[i]) break
        }
    }
    return result.length === 0 ? [-1] : result
}