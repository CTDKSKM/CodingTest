function solution(n, words) {
    const usedWords = new Set(); // 이미 사용된 단어 저장용 Set
    let round = 1;
    let currentPlayer = 1;

    for (let i = 0; i < words.length; i++) {
        if (i > 0 && !isValidWord(words[i - 1], words[i])) {
            return [currentPlayer, round];
        }

        if (usedWords.has(words[i])) {
            return [currentPlayer, round];
        } else {
            usedWords.add(words[i]);
        }

        currentPlayer++;
        if (currentPlayer > n) {
            currentPlayer = 1;
            round++;
        }
    }

    return [0, 0];
}

function isValidWord(prevWord, currentWord) {
    return prevWord[prevWord.length - 1] === currentWord[0];
}
