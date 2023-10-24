function solution(msg) {
    const alp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const answer = [];
    const dictionary = new Map();
    [...alp].forEach(v=>{
        dictionary.set(v, dictionary.size + 1)
    })
    let temp = '';
    for(let i=0; i<msg.length-1; i++) {
        temp += msg[i]

        if (dictionary.has(temp+msg[i+1])) continue
        else {
            answer.push(dictionary.get(temp))
            dictionary.set(temp+msg[i+1], dictionary.size + 1)
            temp = '';
        }
    }
    //마지막 처리.
    answer.push(dictionary.get(temp+msg[msg.length-1]))
    
    return answer
}
/*
있으면 붙이고, 없으면 출력하고 붙이고 셋.
*/