function solution(users, emoticons) {
    let discount = [10, 20, 30, 40];
    let len = emoticons.length;
    let res = [];
    let arr = Array(len).fill(0);

    const dfs = (depth) => {
        if (depth === len) {
            res.push(arr.slice());
            return;
        }

        for (let i = 0; i < 4; i++) {
            arr[depth] = discount[i];
            dfs(depth + 1);
            arr[depth] = 0;
        }
    };

    dfs(0);

    let pp = 0, c = 0;

    for (let i = 0; i < res.length; i++) {
        let sales = res[i];
        let counter = 0, money = 0;

        for (let j = 0; j < users.length; j++) {
            let [a, b] = users[j];
            let sum = 0;
            let flag = false;

            for (let k = 0; k < len; k++) {
                if (sales[k] >= a) {
                    sum += emoticons[k] * (100 - sales[k]) / 100;
                }
                if (sum >= b) {
                    flag = true;
                    break;
                } 
            }

            if (flag) counter++;
            else money += sum;
        }

        if (counter > pp) {
            pp = counter, c = money;
        } else if (counter === pp && money > c) c = money
    }

    return [pp, c];
}
