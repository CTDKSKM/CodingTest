function solution(stones, k) {
    let left = 1;
    let right = 200000000;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        let count = 0;
        let flag = true;

        for (let i = 0; i < stones.length; i++) {
            if (stones[i] - mid <= 0) {
                count++;
                if (count >= k) {
                    flag = false;
                    break;
                }
            } else {
                count = 0;
            }
        }

        if (flag) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
}
