function solution(a, b) {
    a = [...a];
    b = [...b];
    let answer = [];

    let next = 0;
    while(a.length && b.length) {
        let _a = +a.pop();
        let _b = +b.pop();
        let sum = _a + _b + next;

        if(sum >= 10) {
            sum -= 10;
            next = 1;
        } else
            next = 0;

        answer.push(sum);
    }

    let rest = a.length ? a : b;
    while(rest.length) {
        let sum = +rest.pop() + next;
        if(sum >= 10) {
            sum -= 10;
            next = 1;
} else
            next = 0;

        answer.push(sum);
    }

    if(next)
        answer.push(next);

    return answer.reverse().join("");
}