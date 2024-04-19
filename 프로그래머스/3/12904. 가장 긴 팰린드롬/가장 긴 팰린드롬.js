function solution(s)
{
    let maxLength = 1;

    for (let i = 0; i < s.length; i++) {
        let cnt = 1;
        
        while(s[i-cnt] && s[i+cnt] && s[i-cnt] == s[i+cnt]) cnt++
        
        maxLength = Math.max(maxLength, --cnt*2 + 1);
    }
    for (let i = 0; i < s.length -1; i++) {
        if (s[i] !== s[i+1]) continue
        
        let cnt = 1;
        while(s[i-cnt] && s[i+1+cnt] && s[i-cnt] == s[i+1+cnt]) cnt++
        
        maxLength = Math.max(maxLength, --cnt*2 + 2);
    }
    
    return maxLength;
}