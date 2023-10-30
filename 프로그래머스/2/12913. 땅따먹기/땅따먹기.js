function solution(land) {
    const removeColumnUsed = (arr, index) => arr[index] = 0
    const getMaxScore = (row, index) => {
        const rowCopy = [...row]
        removeColumnUsed(rowCopy, index)
        return Math.max(...rowCopy)
    }
    
    for(let i = 1; i < land.length; i++) {
        land[i][0] += getMaxScore(land[i-1], 0)
        land[i][1] += getMaxScore(land[i-1], 1)
        land[i][2] += getMaxScore(land[i-1], 2)
        land[i][3] += getMaxScore(land[i-1], 3)
    }
    
    return Math.max(...land.at(-1))
}

/*
이전 행 점수 + 다음 행 점수 Math.max BUT 이전 행의 열과 같은 열은 연이어 고를 수 없음. 
*/
