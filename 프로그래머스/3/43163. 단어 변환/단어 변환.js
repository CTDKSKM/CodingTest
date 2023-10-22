function solution(begin, target, words) {
    const seen = new Set();
    const queue = [[begin, 0]];
    let found = false;
    let result;

    while (queue.length) {
        const [currentWord, count] = queue.shift();

        if (currentWord === target) {
            found = true;
            result = count;
            break;
        }

        for (let i = 0; i < words.length; i++) {
            if (!seen.has(words[i])) {
                let diff = 0;
                for (let j = 0; j < target.length; j++) {
                    if (currentWord[j] !== words[i][j]) {
                        diff++;
                    }
                }
                if (diff === 1) {
                    seen.add(words[i]);
                    queue.push([words[i], count + 1]);
                }
            }
        }
    }

    if (found) {
        return result;
    } else {
        return 0;
    }
}