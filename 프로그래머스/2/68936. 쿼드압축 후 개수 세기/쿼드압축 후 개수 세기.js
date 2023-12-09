function solution(arr) {
    const answer = [0, 0];
    let $ = quadify(arr, answer)
    let len = arr.length;
    let cnt = 0;
    while (len > 1) {
        cnt++
        len = len/2
    }
    
    try {
        $ = $.flat(cnt+1)
    } catch {
        return answer
    }

    $.forEach(val=>{
        if (val > -1) answer[val]++
    })
    return answer
}
function quadify(arr, ans) {
    if (arr.length == 1) return arr

    let checker = arr[0][0]
    let isSame = true
    arr.forEach((checkedArr)=>{
        checkedArr.forEach(val=>{
            if (val != checker) isSame = false
        })
    })
    if (isSame) {
        ans[checker]++
        return -1
    }

    const len = arr.length

    const newQuadArr = Array.from({length:4},()=>([]))

    return newQuadArr.map((_,idx)=>{
        const newArr = Array.from({length:len/2},()=>([]))
        let iter = len/2
        let n_i = 0
        while(n_i < iter) {
            if (idx == 0) {
                for(let i=0; i<iter; i++) {
                    for(let j=0; j<iter; j++) {
                        if (i == n_i)
                        newArr[n_i].push(arr[i][j])
                    }
                }
            }
            else if (idx == 1) {
                for(let i=0; i<iter; i++) {
                    for(let j=iter; j<len; j++) {
                        if (i == n_i)
                        newArr[n_i].push(arr[i][j])
                    }
                }
            }
            else if (idx == 2) {
                for(let i=iter; i<len; i++) {
                    for(let j=0; j<iter; j++) {
                        if (i == iter + n_i && j < iter) {
                            newArr[n_i].push(arr[i][j])
                        }
                    }
                }
            }
            else {
                for(let i=iter; i<len; i++) {
                    for(let j=iter; j<len; j++) {
                        if (i == iter + n_i && j >= iter) {
                            newArr[n_i].push(arr[i][j])
                        }
                    }
                }
            }
            n_i++
        }

        return quadify(newArr, ans)
    })
}