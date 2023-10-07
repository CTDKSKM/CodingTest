function solution(k, dungeons) {
    const filtered = dungeons.slice().filter(v => v[0] <= k);

    let answer = 0;
    for (let i = 0; i < filtered.length; i++) {
        const subAnswer = solution(k - filtered[i][1],filtered.filter((_, j) => i !== j));
        if (subAnswer + 1 > answer) answer = subAnswer + 1;
    }
    return answer;
}