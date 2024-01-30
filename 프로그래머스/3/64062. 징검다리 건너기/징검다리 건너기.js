function solution(stones, k) {
    let min = Infinity;
    let max = -min;
    for(const num of stones) {
        min = Math.min(min, num)
        max = Math.max(max, num)
    }

    while (min <= max) {
        let mid = Math.floor((min + max) / 2);
        let count = 0;
        let flag = true;

        for (let stone of stones) {
            if (stone - mid <= 0) {
                count++;
                if (count == k) {
                    flag = false;
                    break;
                }
            } else {
                count = 0;
            }
        }

        if (flag) {
            min = mid + 1;
        } else {
            max = mid - 1;
        }
    }

    return min;
}