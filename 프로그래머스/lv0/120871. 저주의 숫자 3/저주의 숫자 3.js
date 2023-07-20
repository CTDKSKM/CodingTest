function solution(n) {
    for(let i=1; i<=n; i++){
        if(i%3 == 0){
            n++;
        }
        if(String(i).includes("3")& i%3 != 0){
            n++
        }
    }
    return n;
}