function solution(play_time, adv_time, logs) {
    const convertTtoN = (timeStr) => {
        const [hh, mm, ss] = timeStr.split(':').map(Number);
        return hh * 3600 + mm * 60 + ss;
    };

    const convertNtoT = (timeNum) => {
        const f = num => String(Math.floor(num)).padStart(2, '0')

        return `${f(timeNum / 3600)}:${f((timeNum % 3600) / 60)}:${f(timeNum % 60)}`;
    };

    const playTimeInSeconds = convertTtoN(play_time);
    const advTimeInSeconds = convertTtoN(adv_time);
    const checker = Array(playTimeInSeconds + 1).fill(0);

    logs.forEach(log => {
        const [start, end] = log.split('-');
        checker[convertTtoN(start)]++;
        checker[convertTtoN(end)]--;
    });

    // 누적 시청자 수 계산
    for (let i = 1; i <= playTimeInSeconds; i++) {
        checker[i] += checker[i - 1];
    }

    // 누적 시간 계산
    for (let i = 1; i <= playTimeInSeconds; i++) {
        checker[i] += checker[i - 1];
    }

    let maxViewTime = checker[advTimeInSeconds];
    let bestStartTime = 0;

    for (let i = advTimeInSeconds; i <= playTimeInSeconds; i++) {
        const viewTime = checker[i] - checker[i - advTimeInSeconds];
        if (viewTime > maxViewTime) {
            maxViewTime = viewTime;
            bestStartTime = i - advTimeInSeconds + 1;
        }
    }

    return play_time === adv_time ? "00:00:00" : convertNtoT(bestStartTime);
}
