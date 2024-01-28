function solution(expression) {
    let answer = 0;
    
    const arr = [];
    let arr_i = 0
    for(let i=0; i<expression.length; i++) {
        if (isNaN(Number(expression[i]))) {
            arr.push(expression[i])
            arr_i += 2
        }
        else {
            arr[arr_i] ? arr[arr_i] += expression[i] : arr[arr_i] = expression[i]
        }
    }
    
    const priorArr = ["*+-","*-+","+*-","+-*","-*+","-+*"]
    for(let i=0; i<priorArr.length; i++) {
        answer = Math.max(answer, Math.abs(calc(arr.slice(), priorArr[i])))
    }
    return answer
;
}
function calc(arr, prior) {
    for(let i=0; i<prior.length; i++) {
        while (arr.includes(prior[i])) {
            const op = arr.indexOf(prior[i])
            let result;
            
            const left = +op - 1
            const right = +op + 1
            if (arr[op] === '*') result = +arr[left] * +arr[right]
            if (arr[op] === '+') result = +arr[left] + +arr[right]
            if (arr[op] === '-') result = +arr[left] - +arr[right]
                    
            arr.splice(left, 3, result)
        }
    }
    while(arr.some(val=>val === '*' || val === '+' || val === '-')) {
        calc(arr, prior)
    }
    return arr
}
// function dfs(n, target, arr, temp, str) {
//     if (n===target) {
//         arr.push(temp)
//         return
//     }
//     for(let i=0; i<str.length; i++) {
//         if (temp.includes(str[i])) continue
//         dfs(n+1, target, arr, temp+str[i], str)
//     }
// }