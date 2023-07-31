function solution(chicken) {
    var answer = 0;
    let coupon = chicken
    for(let i = 0; coupon >= 10; i++) {
        coupon -= 10
        answer++
        coupon++
    }
    return answer;
}