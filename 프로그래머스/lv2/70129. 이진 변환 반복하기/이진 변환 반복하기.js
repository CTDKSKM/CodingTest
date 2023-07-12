function solution(s) {
    let removed = 0;
    let rep = 0;
    while (s!='1') {
        rep++
        for( v of s ) {
            v == 0 ? removed++ : null
        }
        s = s.replaceAll('0','').length.toString(2)
    }
    
    return [rep,removed];
}