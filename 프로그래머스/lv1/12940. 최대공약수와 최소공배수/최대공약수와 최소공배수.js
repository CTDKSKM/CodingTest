function solution(n, m) {
    let big = n > m ? n : m
    let small = n > m ? m : n
    let x = big%small;
    while(small!=0) {
        x=big%small;
        big = small
        small = x;
    }
    
    return [big,n*m/big];
}