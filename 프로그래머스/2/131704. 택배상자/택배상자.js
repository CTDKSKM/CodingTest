function solution(order) {
    var answer = 0;
    let count = 0;
    const stack = []
    let flag = false
    while (1) {
        for(let i=0; i<order.length; i++) {
            if (i==order.length-1) flag = true
            const nextBox = order[i]

            if (count < nextBox) {
                while (count < nextBox-1) {
                    stack.push(count+1)
                    count++
                }
                answer++
                count++
            }
            else {
                if (stack.pop() == nextBox) {
                    answer++
                }
                else {
                    flag = true
                    break
                }
            }
        }
        if (flag) break
    }

    return answer;
}
/*

*/