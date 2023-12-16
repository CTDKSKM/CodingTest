function solution(storey) {
    var answer = 0;
    let arr = [...storey.toString()].map(val=>+val)
    for(let i=arr.length-1; i>=0; i--) {
        if (arr[i] > 5) {
            answer += 10-arr[i]
            if (i>0) {
                arr[i-1]++
            }
            else answer++
        }
        else if (arr[i] < 5) {
            answer += arr[i]
        }
        else if (arr[i] == 5) {
            if (arr[i-1] > 4) {
                answer+=10-arr[i]
                if (i>0) {
                    arr[i-1]++
                }
                else answer++
            }
            else answer += arr[i]
        }
    }
    return answer;
}