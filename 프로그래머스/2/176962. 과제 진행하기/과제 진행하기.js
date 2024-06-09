function solution(plans) {
    let sortList = [];
    for (let item of plans) {
        let temp = item[1].split(":");
        let times = parseInt(temp[0]) * 60 + parseInt(temp[1]);
        item[1] = times;
        sortList.push(item);
    }
    sortList.sort((a, b) => b[1] - a[1]);

    let answer = [];
    while (sortList.length) {
        let temp = sortList.pop();
        for (let index = 0; index < answer.length; index++) {
            if (answer[index][0] > temp[1]) {
                answer[index][0] += parseInt(temp[2]);
            }
        }
        answer.push([temp[1] + parseInt(temp[2]), temp[0]]);
    }
    answer.sort((a, b) => a[0] - b[0]);
    
    return answer.flatMap(item => item.filter(i => typeof i === 'string'));
}
