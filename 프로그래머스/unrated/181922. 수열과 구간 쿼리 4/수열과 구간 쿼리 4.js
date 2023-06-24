function solution(arr, queries) {
    for (let i=0; i<queries.length; i++) {
        arr = arr.map((v,idx)=>{if (idx >= queries[i][0] && idx <= queries[i][1]) {
            if (idx % queries[i][2] == 0) {
                return v+1
            } else return v
        } else return v})
    }
    return arr;
}
