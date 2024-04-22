function solution(jobArr) {
    var answer = 0;
    jobArr = jobArr.sort((a, b) => a[0] - b[0]);
    let queue = [];
    let time = 0;
    let i = 0;
    while(queue.length > 0 || i < jobArr.length) {
        if(jobArr.length > i && jobArr[i][0] <= time) {
            queue.push(jobArr[i++]);
            queue.sort((a, b) => a[1] - b[1]);
            continue;
        }
        if(queue.length > 0) {
            let [ start, work ] = queue.shift();
            answer = answer + time - start + work;
            time += work;
        } else if(queue.length == 0) {
            time = jobArr[i][0];
        }
    }

    return parseInt(answer / jobArr.length);
}