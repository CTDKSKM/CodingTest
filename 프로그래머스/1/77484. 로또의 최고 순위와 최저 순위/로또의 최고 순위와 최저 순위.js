function solution(lottos, win_nums) {
    const answer = [];
    const joker = lottos.filter(v=>!v).length;
    let hit = 0;
    let min = 0;
    
    lottos.forEach(v=>win_nums.includes(v) ? hit++ : min++)
    
    answer[0] = getMax(hit, joker)
    answer[1] = getMin(min)
    
    return answer;
}

function getMax(hit, joker) {
    switch (hit+joker) {
        case 6:
            return 1;
            break
        case 5:
            return 2;
            break
        case 4:
            return 3;
            break
        case 3:
            return 4;
            break
        case 2:
            return 5;
            break
        default:
            return 6;
    }
}

function getMin(num) {
    switch (num) {
        case 0:
            return 1;
            break
        case 1:
            return 2;
            break
        case 2:
            return 3;
            break
        case 3:
            return 4;
            break
        case 4:
            return 5;
            break
        default:
            return 6;
    }
}