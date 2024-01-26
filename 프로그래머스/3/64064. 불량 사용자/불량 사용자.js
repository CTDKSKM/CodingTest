function solution(user_id, banned_id) {
    let answer = 0;
    let set = new Set();
    const check = Array(user_id.length).fill(false);

    function dfs(index, result, user_id, banned_id) {
        if(index === banned_id.length) {
            result.sort((a, b) => a-b);
            set.add(result.join(''));
            return;
        }

        const banned_name = banned_id[index];
        const blen = banned_name.length;
        for(let i=0; i<user_id.length; i++) {
            const user_name = user_id[i];
            const ulen = user_name.length;

            if(blen !== ulen) continue;
            if(check[i])  continue;

            let flag = true;
            for(let j=0; j<blen; j++) {
                if(banned_name[j] === '*') continue;

                if(user_name[j] !== banned_name[j]) {
                    flag = false;
                    break;
                }
            }

            if(flag) {
                check[i] = true;
                const newResult = JSON.parse(JSON.stringify(result));
                newResult.push(i);
                dfs(index+1, newResult, user_id, banned_id);
                check[i] = false;
            }
        }
    }

    dfs(0, [], user_id, banned_id);
    answer = set.size;
    return answer;
}