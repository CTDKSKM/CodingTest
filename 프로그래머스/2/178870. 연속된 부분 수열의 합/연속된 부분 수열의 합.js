function solution(sequence, k) {
    let answer = [0, sequence.length - 1];
    let [sum, left, right] = [0, 0, 0];

    for (let i = 0; i < sequence.length; i++) {
        const num = sequence[i];
        sum += num;
        right = i;

        while (sum > k) {
            sum -= sequence[left];
            left += 1;
        }

        const currentLength = right - left;
        const bestLength = answer[1] - answer[0];

        if (sum === k && currentLength < bestLength) {
            answer = [left, right];
        }
    }

    return answer;
}
