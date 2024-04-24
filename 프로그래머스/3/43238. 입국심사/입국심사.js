function solution(n, times) {
    let left = 0;
    let right = n * Math.max(...times);
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        let sum = times.reduce((acc, val) => acc + Math.floor(mid / val), 0);
        if (sum >= n) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return left;
}
