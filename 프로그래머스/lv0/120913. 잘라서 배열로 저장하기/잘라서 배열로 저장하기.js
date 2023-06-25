function solution(my_str, n) {
    var answer = [];
    const arr = [...my_str]
    while (arr.length > n) {
        answer.push(arr.splice(0,n).join(''))
    }
    answer.push(arr.slice(0).join(''))
    return answer;
}