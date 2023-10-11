function solution(babbling) {
    const available = ["aya","ye","woo","ma"]
    const never = ["ayaaya","yeye","woowoo","mama"]
    let answer = 0;
    
    for (let str of babbling) {
        if (never.some(bannedWord => str.includes(bannedWord))) {
          continue;
        }

        available.forEach(word => {
          str = str.replaceAll(word,'+');
        });

        str = str.replaceAll('+','')
        
        if (!str) {
          answer++;
        }
    }
    
    return answer;
}