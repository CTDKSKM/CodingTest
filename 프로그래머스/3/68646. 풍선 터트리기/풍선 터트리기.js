function solution(a) {
    let answer = 0;
    let leftMin = Infinity;
    let rightMin = new Array(a.length + 1).fill(Infinity);

    // 오른쪽 최소값을 저장하는 배열 생성
    for (let i = a.length - 1; i >= 0; i--) {
        rightMin[i] = Math.min(a[i], rightMin[i + 1]);
    }

    // 각 요소에 대해 양쪽 최소값 비교
    for (let i = 0; i < a.length; i++) {
        const now = a[i];
        let minCount = 0;

        // 왼쪽 최소값 갱신 및 비교
        if (now < leftMin) {
            leftMin = now;
        } else {
            minCount++;
        }

        // 오른쪽 최소값 비교
        if (rightMin[i + 1] < now) {
            minCount++;
        }

        // 양쪽 모두 최소값이 아닌 경우를 제외하고 카운트 증가
        if (minCount < 2) {
            answer++;
        }
    }

    return answer;
}

/*
번호가 더 작은 풍선을 터트리는 행위는 최대 1번 == 자신보다 작은 번호가 좌우 양옆으로 있으면 안됨.
1 2 3 4 5 6 
*/