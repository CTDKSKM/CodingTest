function solution(str_list) {
    const answer = []
    for(let i=0; i<str_list.length; i++){
        if (str_list[i]==='l') {
            if (i===0) break
            answer.push(...str_list.slice(0,i))
            break
        }
        if (str_list[i]==='r') {
            if (i===str_list.length-1) break
            answer.push(...str_list.slice(i+1))
            break
        }
    }
    return answer
}

