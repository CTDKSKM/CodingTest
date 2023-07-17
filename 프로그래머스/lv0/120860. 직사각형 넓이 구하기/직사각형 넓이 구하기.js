function solution(dots) {
    var answer = [0, 0];
    const bottom = dots[0][0]
    const height = dots[0][1]
    for(let i = 1; i<dots.length; i++) {
        if (bottom-dots[i][0] != 0) answer[0] = bottom-dots[i][0]
        if (height-dots[i][1] != 0) answer[1] = height-dots[i][1]
    }
    return Math.abs(answer[0]*answer[1]);
}