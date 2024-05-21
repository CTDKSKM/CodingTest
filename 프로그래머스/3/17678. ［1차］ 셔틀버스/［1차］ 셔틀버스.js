function solution(n, t, m, timetable) {
    const timeToMinutes = (timeStr) => {
        const [hours, minutes] = timeStr.split(':').map(Number);
        return hours * 60 + minutes;
    };
    
    const minutesToTime = (minutes) => {
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}`;
    };
    
    const sortedTimetable = timetable.map(timeToMinutes).sort((a, b) => a - b);
    
    const busTimes = Array.from({ length: n }, (_, i) => 540 + i * t);

    let crewIndex = 0;
    let lastDepartureTime = 0;
    
    for (let i = 0; i < n; i++) {
        const currentBusTime = busTimes[i];
        let passengers = 0;
        
        // 현재 셔틀에 탑승할 수 있는 크루들을 계산
        while (crewIndex < sortedTimetable.length && sortedTimetable[crewIndex] <= currentBusTime && passengers < m) {
            lastDepartureTime = sortedTimetable[crewIndex];
            crewIndex++;
            passengers++;
        }
        
        // 마지막 셔틀일 경우
        if (i === n - 1) {
            if (passengers < m) {
                // 셔틀이 다 차지 않았으면 셔틀 출발 시간에 도착 가능
                return minutesToTime(currentBusTime);
            } else {
                // 셔틀이 다 찼으면 마지막으로 탈 수 있는 사람보다 1분 일찍 도착
                return minutesToTime(lastDepartureTime - 1);
            }
        }
    }
    
    return minutesToTime(lastDepartureTime);
}