function solution(bandage, health, attacks) {
    const [t, x, y] = bandage;
    attacks.reverse();

    let time = 0;
    let hp = health;

    while (attacks.length) {
        const [att_time, damage] = attacks.pop();

        // 회복 시간
        const recovery_time = att_time - time - 1
        const recovery = recovery_time * x;
        const bonus = Math.floor(recovery_time / t) * y;
        hp = Math.min(hp + recovery + bonus, health);
        
        // 피격 시간
        time = att_time;
        hp -= damage;
        
        if (hp <= 0) return -1
    }

    return hp;
}
//bandage = 시전시간t, 초당 회복량x, t초 연속시 추가회복량y
//health = MAXHP
//attacks = 공격시간, 피해량
/*
t초 x피회복 if 연속=>+y
max >= 피
피격=>기술취소
붕대감기, 연속 0
0 >= die
 남은 체력을 return 
 if die => return -1
*/