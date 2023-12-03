function solution(numbers) {
    const result = new Set();
    const used = Array(numbers.length).fill(false);
    
    for(let i=1; i<=numbers.length; i++) {
        permutation(0, result, numbers, "", i, used)
    }
    
    return Array.from(result).filter(num => checkPrime(parseInt(num))).length;
}
function checkPrime(number) {
    if (number <= 1) return false
    for(let i=2; i*i<=number; i++) {
        if(number % i == 0) return false
    }
    return true
}
function permutation(count, result, str, temp, length, used) {
    if (count == length) {
        result.add(parseInt(temp))
        return
    }
    
    for(let i=0; i<str.length; i++) {
        if (used[i]) continue;
        used[i] = true;
        permutation(count+1, result, str, temp+str[i], length, used);
        used[i] = false
    }
}
/*
조합 -> 완전탐색
*/