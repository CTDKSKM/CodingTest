function solution(user_id, banned_id) {
    const candidates = [];
    const answer = {};
    banned_id.forEach(ban => {
        const candidate = [];
        user_id.forEach((id, i) => {
            if (comp(ban, id)) candidate.push(i);
        });
        candidates.push(candidate);
    });

    function f(i = 0, selected = []) {
        if (!candidates[i]) {
            selected.sort();
            answer[selected.join('')] = true;
            return;
        }
        candidates[i].filter(e => !selected.includes(e)).forEach(e => {
            f(i + 1, selected.concat([e]));
        });
    }
    f();
    return Object.keys(answer).length;
}

function comp(ban, id) {
    if (id.length !== ban.length) return false;

    for (let i = 0; i < ban.length; i++) {
        if (ban[i] === '*') continue;
        if (ban[i] !== id[i]) return false;
    }
    return true;
}