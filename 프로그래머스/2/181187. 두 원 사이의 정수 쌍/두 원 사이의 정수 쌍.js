function solution(r1, r2) {
    const calculateMinH = (v) => {
        if (v > r1) return 0
        return Math.ceil(Math.sqrt(Math.pow(r1, 2) - Math.pow(v, 2)))
    }
    const calculateMaxH = (v) => {
        if (v > r2) return 0
        return Math.floor(Math.sqrt(Math.pow(r2, 2) - Math.pow(v, 2)))
    }
    let temp = 0
    for (let x = 0; x < r2; x++) {
        const min = calculateMinH(x)
        const max = calculateMaxH(x)
        const noOfDots = min !== 0 ? max - min + 1 : max - min
        temp += noOfDots
    }
    return temp * 4
}