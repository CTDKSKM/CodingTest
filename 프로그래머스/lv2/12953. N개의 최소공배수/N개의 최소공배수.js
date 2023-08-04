function solution(arr) {
    let temp = arr[0];
    for(let i=0; i<arr.length-1; i++) {
        temp = lcm(temp, arr[i+1])
    }
    return temp;
}

function lcm(a, b) {
    return a*b/gcd(a, b)
}

function gcd(a, b) {
    if (b==0) return a
    return gcd(b, a%b)
}