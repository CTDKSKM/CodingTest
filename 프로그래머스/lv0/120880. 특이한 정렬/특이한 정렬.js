function solution(numlist, n) {
    return numlist.sort((a,b)=>{
        if (Math.abs(n-a) > Math.abs(n-b)) return 1
        else if (Math.abs(n-a) == Math.abs(n-b)) {
            return a > b ? -1 : 1
        } else return -1
    });
}