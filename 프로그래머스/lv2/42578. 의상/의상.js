function solution(clothes) {
    let answer = 1;
    const hash = new Map()
    for(let i=0; i < clothes.length; i++) {
        const 종류 = clothes[i][1]

        hash.has(종류) ? hash.set(종류, hash.get(종류) + 1) : hash.set(종류, 1)
    }
    for(const a of hash) {
        answer *= a[1] + 1
    }
    return answer - 1;
}