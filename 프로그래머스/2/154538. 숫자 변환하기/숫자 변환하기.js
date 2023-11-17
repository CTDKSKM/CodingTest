function solution(x, y, n) {
    let count = 0
    let test = [x]

    if (x === y) return 0

    while (true) {
        count++

        const set = new Set()
        test.forEach(item => {
            if (item + n <= y) set.add(item + n)
            if (item * 2 <= y) set.add(item * 2)
            if (item * 3 <= y) set.add(item * 3)
        })

        if (set.size === 0) return -1

        if (set.has(y)) {
            return count
        }

        test = set
    }
}

/*
x += n
x *= 2
x *= 3
n더하기, 2,3곱하기를 사용해서 y로 만들기. 최소횟수 리턴. 만들수 없다면 -1 return
dp
*/