function solution(n) {
    var count3x = 0;
    while(n > 0){
        count3x = count3x + 1;
        if (count3x.toString().split('').includes('3')){
            continue;
        }
        if (count3x%3 == 0){
            continue;
        }

        n = n - 1;
    }
    return count3x;
}