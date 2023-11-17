function solution(b_len, max, waits) {
    waits = waits.reverse().map(truck=>({weight:truck, time:b_len}));
    let through = [];
    let weight = {val: 0};
    let cnt = 0;

    while(waits.length || through.length) {
        if (waits.length && max >= weight.val + waits.at(-1).weight && b_len > through.length) {
            const truck = waits.pop()
            through.push(truck)
            weight.val += truck.weight
            through = move(through, weight)
            cnt++
        }
        else {
            through = move(through, weight)
            cnt++
        }
    }
    return cnt+1
}
function move(arr, weight) {
    return arr.filter((truck)=>{
                truck.time--
                if (truck.time!==0) return true
                else {
                    weight.val -= truck.weight
                    return false
                }
        })
}