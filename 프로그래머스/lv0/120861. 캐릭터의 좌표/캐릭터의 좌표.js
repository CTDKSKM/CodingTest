function solution(keyinput, board) {
    var answer = [0, 0];
    const [c, r] = board;
    const maxC = (c-1) / 2
    const maxR = (r-1) / 2
    keyinput.map(dir=>{
        if (dir == "left") answer[0]--
        if (dir == "right") answer[0]++
        if (dir == "up") answer[1]++
        if (dir == "down") answer[1]--
        if (answer[0] < -maxC) answer[0]++
        if (answer[0] > maxC) answer[0]--
        if (answer[1] < -maxR) answer[1]++
        if (answer[1] > maxR) answer[1]--
    })
    return answer;
}