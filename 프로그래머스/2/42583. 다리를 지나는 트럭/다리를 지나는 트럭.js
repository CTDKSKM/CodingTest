function solution(b_len, max, waits) {
    waits = waits.reverse().map(truck=>({weight:truck, time:b_len}));
    let through = [];
    let weight = 0;
    let cnt = 0;
    
    while(waits.length || through.length) {
        if (waits.length && max >= weight + waits.at(-1).weight && b_len > through.length) {
            const truck = waits.pop()
            through.push(truck)
            weight += truck.weight
            through = through.filter((truck)=>{
                truck.time--
                if (truck.time!==0) return true
                else {
                    weight -= truck.weight
                    return false
                }
            })
            cnt++
        }
        else {
            through = through.filter((truck)=>{
                truck.time--
                if (truck.time!==0) return true
                else {
                    weight -= truck.weight
                    return false
                }
            })
            cnt++
        }
    }
    return cnt+1
}
/*
최소 몇초?
bridge_length == 트럭 올라갈 수 있는 수

*/