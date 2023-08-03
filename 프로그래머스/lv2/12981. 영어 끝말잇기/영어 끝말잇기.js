function solution(n, words) {
    var answer = [];

    let loser = 0;
    let round = 1;
    
    for (let i=0; i<n && words.length != 0; i++) {
        if (answer.length) {
            if (answer[answer.length-1][answer[answer.length-1].length-1] != words[0][0]) {
                loser = i+1
                break
            }
        }
        if (answer.includes(words[0])) {
            loser = i+1
            break
        } else answer.push(words.shift());
        if (i==n-1) {
            round++
            i=-1
        }
    }
    return loser ? [loser, round] : [0, 0];
}


// 탈락한 사람 번호(index+1)와 바퀴 수(1부터 시작).