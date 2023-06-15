function solution(myString, pat) {
    var answer = 0;
    for(let i=0; i<myString.length - pat.length + 1; i++) {
        myString.substr(i,pat.length).includes(pat) ? answer += 1 : false
    }
    return answer;
}