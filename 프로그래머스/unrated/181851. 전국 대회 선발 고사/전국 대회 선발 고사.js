function solution(rank, attendance) {
  let result = 0;

    for(let i = 0; i < rank.length; i++) {
        if(!attendance[i]) {
            rank[i] = 999999;
        }
    }

    let a = rank.indexOf(Math.min(...rank));
    rank[a] = 999999;
    let b = rank.indexOf(Math.min(...rank));
    rank[b] = 999999;
    let c = rank.indexOf(Math.min(...rank));
    rank[c] = 999999;

    result = 10000 * a + 100 * b + c;

    return result;
}