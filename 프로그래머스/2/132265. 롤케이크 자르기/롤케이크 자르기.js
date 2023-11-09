function solution(topping) {
    let count = 0;
    
    const 철수 = {};
    let 철수토핑수 = 0;
    
    const 동생 = {};
    let 동생토핑수 = 0;
    
    topping.forEach(val=>{
        if (철수[val]) {
            철수[val]++
        } else {
            철수[val] = 1
            철수토핑수++
        }
    })
    
    topping.reverse().forEach(val=>{
        if (동생[val]) {
            철수[val]--
            if (철수[val] == 0) {
                철수토핑수--
            }
        } else {
            동생[val] = 1
            동생토핑수++
            철수[val]--
            if (철수[val] == 0) {
                철수토핑수--
            }
        }
        if (철수토핑수 == 동생토핑수) count++
    })
    
    return count
}
/*

*/