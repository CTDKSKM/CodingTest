function solution(order) {
    var answer = 0;
    const sub = [];
    let idx = 0;
    let turn = 1;
    while (turn <= order.length) {
        sub.push(turn++);
        while (sub.length > 0 && sub[sub.length - 1] === order[idx]) {
            answer++;
            sub.pop();
            idx++;

        }
    }
    return answer;
}
/*

*/