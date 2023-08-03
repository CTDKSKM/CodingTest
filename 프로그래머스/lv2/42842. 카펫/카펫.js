function solution(brown, yellow) {
    var answer = [];
    const size = brown + yellow
    const by = brown/2+2
    for(let isRow=brown/2; answer.length==0; isRow--) {
        const isColumn = by - isRow
        if (isRow * isColumn == size) answer.push(isRow, isColumn)
    }
    return answer;
}
