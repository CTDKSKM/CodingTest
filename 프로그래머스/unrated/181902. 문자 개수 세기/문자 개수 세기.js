function solution(my_string) {
    var alp = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const arr = Array(52).fill(0)
    for(let i=0; i<my_string.length; i++) {
        arr[alp.indexOf(my_string[i])]++
    }

    return arr;
}