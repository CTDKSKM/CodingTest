function solution(diffs, times, limit) {
    let low = 1;
    let high = 100_000;
    let min = high;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2), remain = limit, prev = 0;
        for (let i = 0; i < diffs.length; i++) {
            remain -= diffs[i] > mid ? (times[i] + prev) * (diffs[i] - mid) + times[i] : times[i];
            if (remain < 0) break;
            prev = times[i];
        }
        remain >= 0 ? (min = mid, high = mid - 1) : low = mid + 1;
    }
    
    return min;
}
