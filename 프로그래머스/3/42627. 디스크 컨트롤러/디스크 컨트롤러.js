function solution(jobs) {
    let sum = 0;
    let currentTime = 0;
    let completedJobs = 0;

    // 시작 시간 기준으로 정렬
    jobs.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

    // 작업 완료 여부 배열
    const isJobCompleted = Array(jobs.length).fill(false);

    // 대기열 초기화
    const queue = [jobs[0]];
    isJobCompleted[0] = true;

    // 작업 수행
    while (queue.length) {
        const [start, duration] = queue.shift();

        // 현재 시간이 시작 시간보다 작으면 현재 시간을 시작 시간으로 설정
        if (currentTime < start) currentTime = start;

        // 대기 시간 계산
        if (currentTime > start) sum += (currentTime - start);

        // 작업 수행 시간만큼 시간 경과
        currentTime += duration;
        sum += duration;

        // 모든 작업이 완료되면 종료
        if (++completedJobs === jobs.length) break;

        // 다음 작업 선택
        let nextIndex = findNextJobIndex(jobs, isJobCompleted, currentTime);
        queue.push(jobs[nextIndex]);
        isJobCompleted[nextIndex] = true;
    }

    // 평균 대기 시간 반환
    return Math.floor(sum / jobs.length);
}

// 다음 작업 인덱스 찾기
function findNextJobIndex(jobs, isJobCompleted, currentTime) {
    let minDuration = Infinity;
    let nextIndex;

    jobs.forEach((job, idx) => {
        const [start, duration] = job;
        if (!isJobCompleted[idx] && currentTime > start && duration < minDuration) {
            minDuration = duration;
            nextIndex = idx;
        }
    });

    // 모든 작업이 완료되었을 때 다음 작업 인덱스 반환
    if (minDuration === Infinity) nextIndex = isJobCompleted.indexOf(false);
    return nextIndex;
}
