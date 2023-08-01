function solution(quiz) {
    var answer = [];
    for(let i =0; i<quiz.length; i++) {
        const arr = quiz[i].split(' ')
        if (arr[1] == '+') {
            const check = parseInt(arr[0]) + parseInt(arr[2])
            check == arr[4] ? answer.push('O') : answer.push('X')
        } else {
            const check = parseInt(arr[0]) - parseInt(arr[2])
            check == arr[4] ? answer.push('O') : answer.push('X')
        }
    }
    return answer
}
