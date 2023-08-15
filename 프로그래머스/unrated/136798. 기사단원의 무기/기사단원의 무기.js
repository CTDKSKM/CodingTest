function solution(number, limit, power) {
    var answer = 0;
    for(let i=0; i<number; i++) {
        const atk = 약수개수구하기(i+1);
        atk > limit ? answer+=power : answer+=atk
    }
    return answer;
}

function 약수개수구하기(number) {
    let 약수개수 = 0;
    for(let i=1; i*i<=number; i++) {
        if (i*i == number) 약수개수++
        else if(number%i == 0 ) 약수개수+=2
    }
    return 약수개수;
}