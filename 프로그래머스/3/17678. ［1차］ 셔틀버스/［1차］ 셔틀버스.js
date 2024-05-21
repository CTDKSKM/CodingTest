const ascending = (a, b) => a - b;
const toMilliseconds = sec => 1000 * sec;

const split = separator => str => str.split(separator);
const unshift = e => arr => {
    arr.unshift(e);
    return arr;
};
const join = separator => arr => arr.join(separator);
const getTail = list => list[list.length - 1];
const createOneValueList = value => n => new Array(n).fill(value);

const inputDummyYear = unshift("0000");
const separatingTime = split(":");

const stringToTime = str => +new Date(join(":")(inputDummyYear(separatingTime(str))));
const timeToString = time => {
    const d = new Date(time);
    return `${d.getHours().toString().padStart(2, "0")}:${d.getMinutes().toString().padStart(2, "0")}`;
};

function solution(n, t, m, timetable) {
    // 버스 시간을 구해서 오름차순으로 정렬
    const busTimeList = createOneValueList(0)(n).map((e, i) => stringToTime("09:00") + toMilliseconds(t * i * 60)).sort(ascending);
    // 승객 시간 오름차순 정렬
    const timeTableList = timetable.map(e => stringToTime(e)).sort(ascending);
    // 마지막 버스전까지 탑승에 실패한 승객을 구한다.
    const boardingFailList = (bt, list, limit) => {
        const s = [];
        const f = [];
        list.forEach(pt => (bt >= pt && s.length < limit) ? s.push(pt) : f.push(pt));
        return f;
    };
    const boardingFailLastList = busTimeList.slice(0, busTimeList.length - 1).reduce((a, bt) => boardingFailList(bt, a, m), timeTableList);
    // 마지막 버스에 탑승 성공한 승객을 찾아라.
    const boardingSuccessList = (bt, list) => list.filter(pt => bt >= pt).slice(0, m);
    const boardingSuccessLastList = boardingSuccessList(getTail(busTimeList), boardingFailLastList);
    // 마지막 버스의 만차 여부
    const isFull = boardingSuccessLastList.length === m;
    // 만차일 경우 마지막 탑승객 1분 먼저, 만차가 아닐경우 마지막 버스 시간
    return isFull ? timeToString(getTail(boardingSuccessLastList) - toMilliseconds(60)) : timeToString(getTail(busTimeList));
}