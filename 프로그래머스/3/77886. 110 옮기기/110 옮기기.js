function solution(s) {
    const change = (x) => {
        let count = 0;
        let stack = [];
        
        for (let i = 0; i < x.length; i++) {
            stack.push(x[i]);
            if (stack.length >= 3 && stack.slice(-3).join('') === "110") {
                stack.pop();
                stack.pop();
                stack.pop();
                count++;
            }
        }

        let insertPos = stack.lastIndexOf('0') === -1 ? 0 : stack.lastIndexOf('0') + 1

        const result = stack.slice(0, insertPos).join('') + "110".repeat(count) + stack.slice(insertPos).join('');
        return result;
    }

    return s.map(change);
}
