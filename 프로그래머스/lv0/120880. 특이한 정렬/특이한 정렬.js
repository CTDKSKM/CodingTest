function solution(numlist, n) {
    numlist.sort((a,b)=>{
        let n1 = Math.abs(a-n),
            n2 = Math.abs(b-n);

        return n1 < n2 ? -1 : n1 === n2 ? a < b ? 1 : -1 : 1;
    });
    return numlist;
}