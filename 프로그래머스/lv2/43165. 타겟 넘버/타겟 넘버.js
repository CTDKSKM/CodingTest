function solution(numbers, target) {
    let count = 0;

    function dfs(index, currentSum) {
        if (index === numbers.length) {
            if (currentSum === target) {
                count++;
            }
            return;
        }

        dfs(index + 1, currentSum + numbers[index]);
        dfs(index + 1, currentSum - numbers[index]);
    }
    dfs(0, 0);
    
    return count
}