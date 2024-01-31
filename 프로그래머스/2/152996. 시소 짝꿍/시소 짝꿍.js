function solution(weights) {
    let answer = 0;
    
    const arr = Array.from({length: 1001}, ()=>0);
    
    weights.forEach(val=>arr[val]++)
    
    for(let i=100; i<=1000; i++) {
        const c1 = i
        const c2 = i*2
        const c3 = i*3/2
        const c4 = i*4/3
        if (arr[c1] >= 2) answer += arr[c1] * (arr[c1]-1) / 2
        if (arr[c2] > 0) answer += (arr[c1]*arr[c2])
        if (arr[c3] > 0) answer += (arr[c1]*arr[c3])
        if (arr[c4] > 0) answer += (arr[c1]*arr[c4])
        
    }
    
    return answer
}

//탑승한 사람의 무게와 시소 축과 좌석 간의 거리의 곱이 양쪽 다 같다면 시소 짝꿍
//시소 짝꿍이 몇 쌍 존재하는지 구하여 return
// 2 ≤ weights의 길이 ≤ 100,000
// 100 ≤ weights[i] ≤ 1,000
// 몸무게 단위는 N(뉴턴)으로 주어집니다.
// 몸무게는 모두 정수입니다.
/*
같은 몸무게라고 같은게 아니다.
*/