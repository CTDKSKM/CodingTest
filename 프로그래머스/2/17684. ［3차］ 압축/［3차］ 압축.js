function solution(msg) {
    const answer = [];
    const dictionary = new Map();
    const alp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    [...alp].forEach((v, index) => {
        dictionary.set(v, index + 1);
    });

    let temp = '';

    for (let i = 0; i < msg.length; i++) {
        temp += msg[i];

        if (!dictionary.has(temp + msg[i + 1])) {
            answer.push(dictionary.get(temp));
            dictionary.set(temp + msg[i + 1], dictionary.size + 1);
            temp = '';
        }
    }

    if (temp !== '') {
        answer.push(dictionary.get(temp));
    }

    return answer;
}
/*
있으면 붙이고, 없으면 출력하고 붙이고 셋.
*/