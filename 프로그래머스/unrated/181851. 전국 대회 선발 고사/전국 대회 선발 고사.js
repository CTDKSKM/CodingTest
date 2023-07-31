function solution(rank, attendance) {
    var answer = 0;
    let count = 0;
    for(let i=1; i<=rank.length; i++) {
        if (attendance[rank.indexOf(i)]) {
            count++
            if(count == 1) answer+= 10000*rank.indexOf(i)
            if(count == 2) answer+= 100*rank.indexOf(i)
            if(count == 3) answer+= rank.indexOf(i)
        }
    }
    return answer
}