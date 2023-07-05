function solution(arr) {
    var stk = [arr[0]];
    for(let i = 1; i<arr.length;) {
        if (stk[0] != undefined) {
            if (stk[stk.length-1] < arr[i]) {
            stk.push(arr[i])
            i++
            } else stk.pop()
        } else {stk.push(arr[i]); i++}
    }
    return stk;
}