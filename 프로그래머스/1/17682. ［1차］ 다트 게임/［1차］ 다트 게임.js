function solution(dartResult) {
    let otherValue = 0;
    let nowValue = 0;
    let beforeValue = 0;

    for(let i=0; i<dartResult.length; i++) {
        switch (dartResult[i]) {
            case '*':
                beforeValue = beforeValue*2
                nowValue = nowValue*2
                break
            case '#':
                nowValue = nowValue * -1
                break
            case 'S':
                nowValue = nowValue
                break
            case 'D':
                nowValue = nowValue**2
                break
            case 'T':
                nowValue = nowValue**3
                break
            default:
                if (dartResult[i] == '1' && dartResult[i+1] == '0') {
                    otherValue = beforeValue
                    beforeValue = nowValue
                    nowValue = 10
                    i++
                }
                else {
                    otherValue = beforeValue
                    beforeValue = nowValue
                    nowValue = +dartResult[i]
                }
                
        }
    }
    
    
    return nowValue + beforeValue + otherValue;
}