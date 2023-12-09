function solution(bandage, health, attacks) {
  let currHealth = health;
  let currTime = 0;

  for (let [attackTime, damage] of attacks) {
    let diffTime = attackTime - currTime - 1;
    currHealth += diffTime * bandage[1] + Math.floor(diffTime / bandage[0]) * bandage[2];

    if (currHealth > health) currHealth = health;
    currHealth -= damage;
    if (currHealth <= 0) return -1;
    currTime = attackTime;
  }

  return currHealth;
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