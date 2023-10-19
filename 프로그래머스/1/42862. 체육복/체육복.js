function solution(n, lost, reserve) {
    let answer = n;
    
    lost.sort((a,b)=>a-b)
    reserve.sort((a,b)=>a-b)
    
    lost.forEach((num,idx)=>{
        if (reserve.includes(num)) {
            delete lost[idx]
            delete reserve[reserve.indexOf(num)]
        }
    })
    
    lost.forEach(num=>{
        if (reserve.includes(num-1)) {
            reserve[reserve.indexOf(num-1)] = '*';
        }
        else if (reserve.includes(num+1)) {
            reserve[reserve.indexOf(num+1)] = '*';
        }
        else {
            answer--
        }
    })
    
    return answer;
}
/*
번호 = 체격 순
바로 앞번호나 뒷번호 학생에게만 빌려줄 수 있음. ex 4= 3 or 5
최대한 많은 학생이 들어야 함.
전체 학생수n, 잃은 학생lost, 여벌학생reserve 최댓값.
여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다. 이때 이 학생은 체육복을 하나만 도난당했다고 가정하며, 남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.
*/