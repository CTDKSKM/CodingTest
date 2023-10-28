function solution(prices) {
    let stack = [];
    let max = prices[0];
    let answer = [];

    prices.forEach((e,i)=>{

        if(e >= max){
            stack.push([e,i]);
            max = e;
        }else{
            while(stack.length > 0 && stack[stack.length-1][0] > e){
                const target = stack.pop();
                answer[target[1]] = i-target[1];
            }
            stack.push([e,i]);
            max = e;
        }
    })

    while(stack.length > 0){
        const target = stack.pop();
        answer[target[1]] = prices.length-target[1]-1;
    }

    return answer;
}

/*

*/