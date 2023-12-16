function solution(sequence, k) {
    let answer = null;
    let sum = sequence[0];
    let i = 0, j = 0;
    while (i < sequence.length && j < sequence.length) {
        if (sum == k) {
            if (answer == null || j - i < answer[1] - answer[0]) {
                answer = [i, j];
            }
        }
        if (sum < k || i == j) {
            j += 1;
            sum += sequence[j];
        } else {
            sum -= sequence[i];
            i += 1;
        }
    }

    return answer;
}