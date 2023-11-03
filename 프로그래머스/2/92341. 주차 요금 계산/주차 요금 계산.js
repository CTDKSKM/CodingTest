function solution(fees, records) {
    const [basicTime,basicFee,unitTime,unitFee] = fees
    const memo = new Map();
    const accFee = new Map();
    const isStayed = {};
    
    records.forEach(record=>{
        const [time, carNum, sign] = record.split(" ")

        if (sign === "IN") {
            memo.set(carNum, time)
            isStayed[carNum] = true
        }
        else if(sign === "OUT") {
            const [inH, inM] = memo.get(carNum).split(":")
            const [outH, outM] = time.split(":")
            const stayingTime = (outH - inH)*60 + (outM - inM)
            accFee.set(carNum, (accFee.get(carNum)||0) + stayingTime)
            isStayed[carNum] = false
        }
    })
    
    Object.entries(isStayed).filter(val=>val[1]).forEach(([carNum]) => {
        const [inH, inM] = memo.get(carNum).split(":")
        const [outH, outM] = "23:59".split(":")
        const stayingTime = (outH - inH)*60 + (outM - inM)
        accFee.set(carNum, (accFee.get(carNum)||0) + stayingTime)
    })
    
    return Array(...accFee).sort((a,b)=>Number(a[0])-Number(b[0])).map(([_,stayingTime])=>{
        let sum = basicFee;
        stayingTime -= basicTime;
        if (stayingTime > 0) {
            sum += Math.ceil(stayingTime/unitTime) * unitFee
        }
        return sum;
    });
}

/*
출차-입차 시간에서 기본시간 제외하고 기본요금 + 시키고 단위시간마다 단위요금 내도록. 나누어떨어지지 않으면 올림.
"0000"~"9999" = 차량번호
"IN" = 입차, "OUT" = 출차
OUT이 없을경우 23:59 출차
[시간, 차량번호, 입출차] = records[i].split(" ")
[시, 분] = 시간.split(":")
*/