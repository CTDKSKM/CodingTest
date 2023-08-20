function solution(s) {
    let answer = 0;
    for(let i=0; i<s.length; i++) {
        let str = s.slice(i) + s.slice(0, i)
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
    }
    return answer;
}