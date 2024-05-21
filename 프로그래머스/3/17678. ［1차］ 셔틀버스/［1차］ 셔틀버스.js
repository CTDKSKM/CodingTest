function solution(n, t, m, timetable) {
    function timeToMinutes(timeStr) {
        const [hours, minutes] = timeStr.split(':').map(Number);
        return hours * 60 + minutes;
    }
    
    function minutesToTime(minutes) {
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}`;
    }
    
    for (let minute = 1; minute <= 60 * 24; minute++) {
        const busTickets = [];
        let r = [];
        for (const _t of timetable) {
            r.push({ time: timeToMinutes(_t), isCon: false });
        }

        const conTime = 1440 - minute; // 1440 is the total minutes in a day
        r.push({ time: conTime, isCon: true });
        r.sort((a, b) => a.time - b.time);

        for (let i = 0; i < n; i++) {
            const busTime = 540 + t * i; // 540 minutes = 9:00 AM
            for (let j = 0; j < m; j++) {
                busTickets.push(busTime);
            }
        }

        for (const ticket of busTickets) {
            if (ticket >= r[0].time) {
                const temp = r.shift();
                if (temp.isCon) {
                    return minutesToTime(temp.time);
                }
            }
        }
    }
}