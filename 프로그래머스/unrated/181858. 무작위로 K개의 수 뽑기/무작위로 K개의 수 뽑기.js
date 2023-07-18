function solution(arr, k) {
    const result = [...new Set(arr)]
    return result.length >= k ? result.slice(0, k) : new Array(k).fill(0).map((v,idx)=>result[idx]??-1);
}