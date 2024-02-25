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
            round++
        }
        //mine 1 + temp 1
        if (!isPassed && coin >= 1 && check(mine, temp, target)) {
            isPassed = true
            round++
            coin -= 1
        }
        //temp 2
        if (!isPassed && coin >= 2 && check(temp, temp, target)) {
            isPassed = true
            round++
            coin -= 2
        }
        
        if (!isPassed) break // 셋 다 실패
    }
    
    return round;
}
function check(arr1, arr2, target) {
    let ret = false
    for(let i=0; i<arr1.length; i++) {
        if (ret) break

        const num = arr1[i]
        const need = target-num

        if (arr2.includes(need)) {
            ret = true

            arr2.splice(arr2.indexOf(need), 1)
            arr1.splice(i, 1)
        }
    }
    
    return ret
}
function select(num, cards) {
    const ret = cards.splice(0, num)
    
    return ret
}