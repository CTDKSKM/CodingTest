function solution(a, b) {
    let 분모 = b / gcd(a, b);

    const 소인수 = new Set();
    for (let i = 2; 분모 != 1; i++) {
        while (분모 % i === 0) {
            소인수.add(i);
            분모 /= i;
        }
    }
    소인수.delete(2);
    소인수.delete(5);
    return 소인수.size ? 2 : 1
}
function gcd(a, b) {
    if (b===0) return a;
    else return gcd(b, a%b)
}