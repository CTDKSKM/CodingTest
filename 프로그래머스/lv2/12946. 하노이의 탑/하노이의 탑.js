function solution(n) {
    return towerMove(n,1,2,3);
}

function towerMove(n, start, sub, end) {
    if(n == 1)
        return [[start,end]];
    let result = [];
    result = result.concat(towerMove(n - 1, start, end, sub));
    result.push([start, end]);
    result = result.concat(towerMove(n - 1, sub, start, end));
    return result;
}