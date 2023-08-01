function solution(arr, query) {
    let s = 0;
    let e = query.length - 1;
    for (let i=0; i<query.length; i++) {
        if (i%2==0) e = s + query[i];
        else s += query[i];
    }
    const answer = arr.slice(s, e+1);
    return answer.length ? answer : [-1];
}