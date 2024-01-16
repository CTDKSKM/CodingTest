function solution(book_time) {
    book_time.sort((a,b)=>calc(a[0],b[0]))
    let answer = 0;
    let now = '00:00';
    const roomMap = new Map();
    book_time.forEach((val, idx) => {
        const [enter, leave] = val;
        now = enter;

        const iterator = roomMap.entries();
        for (const [key, endTime] of iterator) {
            if (calc(now, endTime) >= 0) {
                roomMap.delete(key);
            }
        }
        const possibleTime = addCleanTime(leave)
        roomMap.set(enter+idx, possibleTime);
        answer = Math.max(answer, roomMap.size);
    });
    
    return answer;
}
function calc(a, b) {
    const [a_hours, a_minutes] = a.split(':').map(Number);
    const [b_hours, b_minutes] = b.split(':').map(Number);

    if (a_hours === b_hours) {
        return a_minutes - b_minutes;
    }

    return a_hours - b_hours;
}
function addCleanTime(str_time) {
    let flag = false
    const arr = [...str_time]
    
    if (+arr[3]+1 > 5) {arr[3] = '0';flag=true}
    else arr[3] = (+arr[3]+1).toString()
    
    if(flag && arr[3] == '0') {
        flag=false
        if (+arr[1]+1 > 9) {arr[1] = '0';flag=true}
        else arr[1] = (+arr[1]+1).toString()
    }
    if (flag && arr[1] == '0') arr[0] = (+arr[0]+1).toString()
    
    return arr.join('')
}