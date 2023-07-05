function solution(arr) {
    const stk = [];
    // let i = 0
    // for (let i = 0; i < arr.length; i += 1) {
    //     while ((stk[stk.length-1] || 0) >= arr[i]) {
    //         stk.pop()
    //     }
    //     stk.push(arr[i])
    // }
    let prev = 100001
    for (let i = arr.length - 1; i >= 0; i -= 1) {
        const v = arr[i]
        if (v < prev) {
            stk.unshift(v)
            prev = v
        }
    }
    return stk;
}