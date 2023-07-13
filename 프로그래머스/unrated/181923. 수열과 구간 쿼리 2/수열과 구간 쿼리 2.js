
function solution(arr, queries) {
    var answer = [];
    queries.map(([s, e, k])=>{
        let temp = [];
        for(let i = s; i <= e; i++) {
            if (arr[i] > k) {
                temp.push(arr[i])
            }
        }
        temp.length ? answer.push(Math.min(...temp)) : answer.push(-1)
    })
    return answer;
}