function solution(n,a,b)
{
    // let answer = 1;
    // for(let i=2; i<=n; i*=2) {
    //     if (a <= i && b <= i) return answer
    //     else answer++
    // }
    var answer = 1;
    for(let i=1; i<n; i++) {
        if (a+b == 3) return answer
        answer++
        a = Math.ceil(a/2)
        b = Math.ceil(b/2)
        if (Math.abs(a-b) <= 1) {
            if(a%2==0 && a-b > 0) return answer
            if(b%2==0 && b-a > 0) return answer
            if (a == b) return --answer
        }
    }
}