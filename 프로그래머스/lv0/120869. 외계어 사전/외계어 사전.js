function solution(spell, dic) {
    var answer = 0;
    dic.map(str=>{
        let temp = 0;
        for(let i =0; i<spell.length; i++) {
            str.includes(spell[i]) && temp++
        }
        temp === spell.length ? answer = 1 : false
    });
    return answer ? 1 : 2
}