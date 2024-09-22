function solution(diffs, times, limit) {
    let [low, high, min] = [1, 100000, 100000];

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
