function solution(sequence, k) {
    var answer = [0, sequence.length-1];
    let sum = 0;
    let left = 0;
    let right = 0;
    for(let i=0; i<sequence.length; i++) {
        const num = sequence[i]

        sum+=num
        right = i
        while(sum > k) {
            sum -= sequence[left]
            left += 1
        }
        if (sum == k) {
            if (answer[1]-answer[0] > right - left) {
                answer[0] = left
                answer[1] = right
            }
        }
    }
    return answer;
}