const DOWN = 0
const RIGHT = 1
const UP = 2

function solution(n) {
    var answer = [];

    var obj = {}
    let runnable = (len, rootIdx, init) => {
        if (init > n * (n + 1) / 2 || len < 1 || rootIdx > n) return

        let count = 2 * len - 1
        for(var i = 0; i < count; i++) {
            if (i < len) {
                if (!obj[rootIdx + i]) { obj[rootIdx + i] = [i + init]} 
                else { obj[rootIdx + i].push(i + init)}
            } else {
                obj[rootIdx + len - 1].push(i + init)
            }
        }

        runnable(len - 3, rootIdx + 2, init + 3 * (len - 1))

        for(var i = 1; i <= len - 2; i++) {
            obj[rootIdx + len - 1 - i].push(init + count - 1 + i)
        }
    }

    runnable(n, 1, 1)

    Object.keys(obj).map(key => obj[key].map(a => answer.push(a)))

    return answer;
}

function make_list(n) {
   return Array.from({length: n}).map((_,i) => 0)
}