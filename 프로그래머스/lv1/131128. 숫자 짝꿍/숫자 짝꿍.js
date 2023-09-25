function solution(X, Y) {
    var answer = '';

    const arrX = [...X].sort((a,b)=>a-b)
    const arrY = [...Y].sort((a,b)=>a-b)

    while (arrX.length && arrY.length) {
        if (arrY[arrY.length-1] === arrX[arrX.length-1]) {
            answer+= arrX[arrX.length-1]
            arrY.pop()
            arrX.pop()
        }
        else if (arrY[arrY.length-1] > arrX[arrX.length-1]) {
            arrY.pop()
        } else arrX.pop()

    }
    return answer ? answer[0] == 0 ? '0' : answer : '-1';
}