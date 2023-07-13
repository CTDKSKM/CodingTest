
function solution(arr, queries) {
    return queries.map(([s,e,k]) => {
                let aaa = arr.slice(s,e+1).filter((bb) => bb > k)
                return !aaa.length ? -1 : Math.min(...aaa)
            })
}
