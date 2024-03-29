function solution(coin, cards) {
    const N = cards.length
    const target = N+1
    let mine = select(N/3, cards)
    let temp = []
    let round = 1
    
    while(cards.length) {
        temp = temp.concat(...select(2, cards))
        let isPassed = false // 타겟 메이킹 성공했는지 검증
        
        //mine 2
        if (check(mine, mine, target)) {
            isPassed = true
        }
        //mine 1 + temp 1
        if (!isPassed && coin >= 1 && check(mine, temp, target)) {
            isPassed = true
            coin -= 1
        }
        //temp 2
        if (!isPassed && coin >= 2 && check(temp, temp, target)) {
            isPassed = true
            coin -= 2
        }
        
        if (!isPassed) break // 셋 다 실패
        round++
    }
    
    return round;
}
function check(arr1, arr2, target) {
    for (let i = 0; i < arr1.length; i++) {
        const num = arr1[i];
        const need = target - num;

        if (arr2.includes(need)) {
            arr2.splice(arr2.indexOf(need), 1);
            arr1.splice(i, 1);
            return true;
        }
    }
    return false;
}

function select(num, cards) {
    return cards.splice(0, num)
}