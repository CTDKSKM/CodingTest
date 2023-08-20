function solution(s) {
    let answer = 0;
    const sArr = [...s]
    for(let i=0; i<s.length; i++) {
        let str = sArr.join('')
        while (true) {
            const len = str.length
            str = str.replaceAll('()', '')
            str = str.replaceAll('{}', '')
            str = str.replaceAll('[]', '')
            if (str.length == 0) {
                answer++
                break
            }
            if (len == str.length) break
        }
        sArr.push(sArr.shift())
    }
    return answer;
}