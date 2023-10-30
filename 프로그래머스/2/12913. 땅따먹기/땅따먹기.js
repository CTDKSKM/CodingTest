function solution(land) {
    return Math.max(...land.reduce((a, c) => {
        return [
            c[0] + Math.max(a[1], a[2], a[3]),  
            c[1] + Math.max(a[0], a[2], a[3]),
            c[2] + Math.max(a[0], a[1], a[3]),
            c[3] + Math.max(a[0], a[1], a[2]),
        ];
    }, [0, 0, 0, 0]));
}

/*
이전 행 점수 + 다음 행 점수 Math.max BUT 이전 행의 열과 같은 열은 연이어 고를 수 없음. 
*/
