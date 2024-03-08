function doubleCheck(arr1, arr2) {
    const checker = new Set(arr1)
    
    return arr2.some((num)=>checker.has(num))
}

function solution(arrayA, arrayB) {
    const isDouble = doubleCheck(arrayA,arrayB)
    //중복있을 시,
    if (isDouble) return 0
    
    let max = 0;
    
    arrayA.sort((a,b)=>a-b)
    arrayB.sort((a,b)=>a-b)
    let ret = 0;
    const tempA = []
    const tempB = []
    for(let i=1; i<=arrayA[0]; i++) {
        arrayA[0] % i ? null : tempA.push(i)
    }
    for(let i=1; i<=arrayB[0]; i++) {
        arrayB[0] % i ? null : tempB.push(i)
    }

    tempA.forEach((num)=>{
        const possible = arrayA.every(numA=>numA % num === 0);
        const isDivided = arrayB.some((numB)=>numB % num === 0)
        if (possible && !isDivided) max = Math.max(max, num)
    })
    tempB.forEach((num)=>{
        const possible = arrayB.every(numB=>numB % num === 0);
        const isDivided = arrayA.some((numA)=>numA % num === 0)
        if (possible && !isDivided) max = Math.max(max, num)
    })
    
    return max;
}

/*
A의 약수들. but B의 약수X
B의 약수들. but A의 약수X
return 가장 큰 양의 정수 a의 값
철수가 가진 카드들에 적힌 모든 숫자를 나눌 수 있고 영희가 가진 카드들에 적힌 모든 숫자들 중 하나도 나눌 수 없는 양의 정수 a
영희가 가진 카드들에 적힌 모든 숫자를 나눌 수 있고, 철수가 가진 카드들에 적힌 모든 숫자들 중 하나도 나눌 수 없는 양의 정수 a
*/