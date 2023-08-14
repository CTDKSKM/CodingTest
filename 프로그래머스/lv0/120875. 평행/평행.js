function solution(dots) {
    const 기울기들 = {}
    for(let i=0; i<dots.length; i++) {
        for(let j=i+1; j<dots.length; j++) {
            const [x1, y1] = dots[i]
            const [x2, y2] = dots[j]
            const 기울기 = (x2-x1) / (y2-y1)
            기울기들[`${i}${j}`] = 기울기
        }
    }
    if (기울기들["01"] === 기울기들["23"]) return 1
    if (기울기들["02"] === 기울기들["13"]) return 1
    if (기울기들["03"] === 기울기들["12"]) return 1
    return 0;
}