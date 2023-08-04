function solution(n)
{
    var ans = 0;
    for(let i=n; i>0; i/=2) {
        if (i%2==0) continue
        i--
        ans++
    }
    return ans;
}
// 나눠지면 나누고 아니면 -1해서 건전지사용.