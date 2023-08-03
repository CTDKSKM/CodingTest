function solution(food) {
    var answer = '';
    for(let i=1; i<food.length; i++) {
        const temp = i.toString()
        if (food[i] == 1) continue
        if (food[i] % 2) {
            answer += temp.repeat((food[i]-1)/2)
        } else answer += temp.repeat(food[i]/2)
    }
    return answer + '0' + [...answer].reverse().join('');
}


//왼쪽부터 오른쪽까지 세팅 후 + 물 세팅 + 역순 세팅