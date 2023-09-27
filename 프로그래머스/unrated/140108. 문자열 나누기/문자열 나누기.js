function solution(s) {
    var answer = 0;
    let x = s[0]
    let orgCount = 0,
        otherCount = 0;
    for(let i=0; i<s.length; i++) {
        s[i] == x ? orgCount++ : otherCount++
        if (orgCount == otherCount) {
            answer++
            orgCount = 0
            otherCount = 0
            x = s[i+1]
        } else {
            if (i == s.length-1) answer++
        }
    }
    return answer;
}