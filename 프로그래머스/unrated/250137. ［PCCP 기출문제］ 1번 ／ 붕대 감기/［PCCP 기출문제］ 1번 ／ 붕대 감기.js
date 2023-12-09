function solution(bandage, health, attacks) {
    //bandage = 시전시간t, 초당 회복량x, t초 연속시 추가회복량y
    //health = MAXHP
    //attacks = 공격시간, 피해량
    const [t, x, y] = bandage
    attacks.reverse();
    let time = 0;
    let success = 0;
    let hp = health
    while (attacks.length && time <= attacks[0][0]) {
        const [att_time, damage] = attacks.pop()
        while(time < att_time) {
            time++
            success++
            hp += x
            if (success == t) {
                success = 0
                hp += y
            }
            if (hp > health) hp = health
        }
        time++
        hp -= damage
        success = 0
        if (hp <= 0) return -1
    }
    return hp;
}

/*
t초 x피회복 if 연속=>+y
max >= 피
피격=>기술취소
붕대감기, 연속 0
0 >= die
 남은 체력을 return 
 if die => return -1
*/