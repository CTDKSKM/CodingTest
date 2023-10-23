function solution(number, k) {
    const stack = [];
    let removeCount = 0;

    for (let i = 0; i < number.length; i++) {
        const current = number[i];

        while (stack.length > 0 && stack[stack.length - 1] < current && removeCount < k) {
            stack.pop();
            removeCount++;
        }

        stack.push(current);

        // 더 이상 제거할 수 있는 숫자가 없으면 나머지 숫자를 그대로 stack에 삽입
        if (removeCount === k) {
            for(let j = i+1; j<number.length; j++) {
                stack.push(number[j])
            }
            break;
        }
    }

    // 필요한 숫자만 남도록 k가 남아있는 경우 뒤에서부터 k만큼 제거
    stack.splice(stack.length - (k - removeCount), k - removeCount);

    return stack.join('');
}