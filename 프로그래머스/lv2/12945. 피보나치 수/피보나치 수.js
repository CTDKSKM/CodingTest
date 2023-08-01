function solution(n) {
    const arr = [0, 1]
    for(let i=2; i<=n; i++) {
        const temp = arr[i-2] + arr[i-1]
        arr.push(temp % 1234567)
    }
    
    return arr[arr.length-1];
}