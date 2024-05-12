function solution(sequence) {
    const p = [1, -1];
    
    const s1 = sequence.map((v,i)=>v*p[i%2]);
    const s2 = sequence.map((v,i)=>v*p[(i+1)%2]);
    
    return Math.max(findMax(s1), findMax(s2));
}
function findMax(arr) {
    let maxEndingHere = arr[0];
    let maxSoFar = arr[0];

    for (let i = 1; i < arr.length; i++) {
        maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }

    return maxSoFar;
}