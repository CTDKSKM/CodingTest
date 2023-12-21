function solution(picks, minerals) {
    //picks = [dia, iron, stone]
    //minerals = {diamond | iron | stone}[]
    const cost = {
        "diamond": {
            "diamond": 1,
            "iron": 1,
            "stone": 1,
        },
        "iron": {
            "diamond": 5,
            "iron": 1,
            "stone": 1,
        },
        "stone": {
            "diamond": 25,
            "iron": 5,
            "stone": 1,
        }
    }
    const arr = []
    let k=picks.reduce((acc,cur)=>acc+cur,0)
    var answer = 0;
    for(let i=0; i<minerals.length; i+=5) {
        if (k > 0)
        arr.push(minerals.slice(i, i+5))
        k-=1
    }
    const costArr = arr.map((mineralSet)=>{
        let diaCost = 0;
        let ironCost = 0;
        let stoneCost = 0;
        mineralSet.map((mineral)=>{
            diaCost += cost["diamond"][mineral]
            ironCost += cost["iron"][mineral]
            stoneCost += cost["stone"][mineral]
        })
        return [diaCost, ironCost, stoneCost, ironCost-diaCost, stoneCost-ironCost]
    })
    costArr.sort((a,b)=>b[4] - a[4])
    costArr.forEach((val)=>{
        const [dia, iron, stone, c1, c2] = val
        if (picks[0]) {
            picks[0]--
            answer+=dia
        }
        else if (picks[1]) {
            picks[1]--
            answer+=iron
        }
        else {
            picks[2]--
            answer+=stone
        }
    })
    
    return answer;
}

/*
곡괭이로 광물을 캘 때는 피로도가 소모
다곡=[1,1,1]
철곡=[5,1,1]
돌곡=[25,5,1]
광물 5개 캔 후 바사삭
사용할 수 있는 곡괭이중 아무거나 하나를 선택해 광물을 캡
한 번 사용하기 시작한 곡괭이는 사용할 수 없을 때까지 사용
광물은 주어진 순서대로만 캘 수 있
광산에 있는 모든 광물을 캐거나, 더 사용할 곡괭이가 없을 때까지 광물을 캡니다.
 최소한의 피로도
*/