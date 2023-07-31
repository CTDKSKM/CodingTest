function solution(chicken) {
    var answer = 0;
    let coupon = chicken
    for(let i = 0; coupon >= 10; i++) {
        answer += parseInt(coupon/10)
        coupon = parseInt(coupon/10) + coupon%10
    }
    return answer;
}