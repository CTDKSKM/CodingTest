function solution(n, works) {
    if (works.reduce((acc,cur)=>acc+cur,0) <= n) return 0 // n이 충분할 시 0 리턴
    
    works.sort((a, b) => b - a); // 가장 많은 작업부터 줄이도록 정렬

    while (n > 0) {
        let max = works[0]; // 현재 가장 많은 작업
        let idx = 0; // 현재 가장 많은 작업의 인덱스

        // 가장 많은 작업을 최대한 균등하게 줄이기
        for (let i = 1; i < works.length; i++) {
            if (works[i] >= max) {
                idx = i;
                max = works[i];
            } else {
                break;
            }
        }

        // 작업량 감소
        for (let i = 0; i <= idx; i++) {
            if (n === 0) break;
            works[i]--;
            n--;
        }
    }

    return works.reduce((acc, cur) => acc + cur * cur, 0);

}
