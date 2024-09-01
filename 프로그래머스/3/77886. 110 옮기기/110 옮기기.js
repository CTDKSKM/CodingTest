function solution(s) {
    var answer = [];

    for (let sc of s) {
        answer.push(foo(sc));
    }

    return answer;
}

function foo(s) {
    let count = 0;
    let stack = [];
    for (let ch of s) {
        if (ch == 1) { stack.push(ch); }
        else {
            if (stack.length > 1 && stack[stack.length-1] == '1' && stack[stack.length-2] == '1') {
                stack.pop();
                stack.pop();
                count += 1;
            } else {
                stack.push(ch);
            }
        }
    }

    let remain_s = stack.join('');
    let answer = '';
    const insert_text = '110'.repeat(count);

    const chk = remain_s.indexOf('111');
    if (chk != -1) {
        answer = remain_s.slice(0, chk) + insert_text + remain_s.slice(chk);
    } else {
        let idx = remain_s.length-1;
        if (remain_s[idx] == '1') {
            while (idx-1 >= 0 && remain_s[idx] == '1') { idx -= 1; }
        }
        if (idx == 0 && remain_s[idx] == '1') {
            answer = insert_text + remain_s.slice();
        } else {
            answer = remain_s.slice(0, idx+1) + insert_text + remain_s.slice(idx+1);
        }
    }

    return answer;
}