function solution(numbers) {
    const result = numbers.sort((a, b) => {
        const strA = String(a);
        const strB = String(b);

        return (strB + strA).localeCompare(strA + strB);
    }).join('')
    
    if (result[0] === '0') return '0'
    
    return result
}