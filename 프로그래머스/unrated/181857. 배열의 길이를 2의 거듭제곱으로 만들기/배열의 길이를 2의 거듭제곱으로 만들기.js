function solution(arr) {
    let i = 0
    while (arr.length > Math.pow(2, i)) {
        i++
    }
    
    let j = Math.pow(2,i) - arr.length
    while (j) {
        arr.push(0)
        j--
    }
    return arr;
}