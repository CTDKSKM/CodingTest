function solution(n, results) {
    // 승패 관계를 저장할 2차원 배열 초기화
    const win = Array.from({ length: n + 1 }, () => Array(n + 1).fill(false));
    
    // 승패 관계 설정
    results.forEach(([winner, loser]) => {
        win[winner][loser] = true;
    });
    // 플로이드-워셜 알고리즘
    for (let k = 1; k <= n; k++) {
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                if (win[i][k] && win[k][j]) {
                    win[i][j] = true;
                }
            }
        }
    }
    
    let answer = 0;
    // 각 선수별로 확실한 승패 관계를 체크하여 순위를 확정할 수 있는 선수의 수를 계산
    for (let i = 1; i <= n; i++) {
        let count = 0;
        for (let j = 1; j <= n; j++) {
            if (win[i][j] || win[j][i]) {
                count++;
            }
        }
        if (count === n - 1) {
            answer++;
        }
        
    }
    
    return answer;
}