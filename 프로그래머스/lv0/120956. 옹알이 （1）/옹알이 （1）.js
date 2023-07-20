function solution(babbling) {
    const wordSet = new Set(["aya", "ye", "woo", "ma"])
    let result = 0;

    for(const word of babbling) {
        let remainWord = '';
        let prevWord = '';
        for(const char of word) {
            remainWord += char;
            if(wordSet.has(remainWord)) {
                if(remainWord === prevWord) break;
                prevWord = remainWord
                remainWord = ''
            }
        }
        if(remainWord === '') result++
    }
    return result;
}