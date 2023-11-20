function solution(cipher, code) {
    var answer = []
    let arr = [...cipher]
    arr.forEach((v,i) => {
        (i%code == 0) ? answer.push(arr[i-1]) : 0;
    })
    if (arr.length%code == 0) answer.push(arr[arr.length-1])
    
    return answer.join('');
}