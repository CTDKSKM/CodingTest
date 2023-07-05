function solution(arr) {
    var answer = 0;
    for (let i =0; i>=0; i++) {
        const tempArr = arr
        arr = arr.map(item=>{
            if (item >= 50) {
                if (item % 2 == 0) return item/2
                return item
            } else if (item % 2 != 0) {
                return item*2+1
            }
            return item
        }) 
        if (tempArr.reduce((acc,cur)=>acc+cur) === arr.reduce((acc,cur)=>acc+cur)) break
        answer++

    }
    return answer;
}