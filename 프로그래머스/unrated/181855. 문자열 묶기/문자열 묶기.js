function solution(strArr) {
    var answer = 0;
    const newStrArr = strArr.map(item=>item.length).sort((a,b)=>a-b)
    for(let i = 0; newStrArr.length > answer; i++) {
        const temp = newStrArr.splice(0,newStrArr.findIndex((val,idx)=>val != newStrArr[idx+1])+1).length
        temp > answer ? answer = temp : null
    }
    return answer;
}