function solution(msg) {
    const dict = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('').reduce((dict, c, i) => {
        dict[c] = i+1;
        return dict;
    }, {});
    dict.nextId = 27;
    const ans = [];
    for(let i = 0, j = 0; i < msg.length; i = j){
        j = msg.length;
        let longest = '';
        while(dict[(longest = msg.substring(i, j))] === undefined) --j;
        ans.push(dict[longest]);
        dict[longest + msg[j]] = dict.nextId++;
    }

    return ans;
}
/*
있으면 붙이고, 없으면 출력하고 붙이고 셋.
*/