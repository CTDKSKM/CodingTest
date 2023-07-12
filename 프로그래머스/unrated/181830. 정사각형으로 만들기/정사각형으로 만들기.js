function solution(arr) {
    const row = arr[0].length
    const col = arr.length
    if (row > col) {
        const rep = row-col
        for(let i = 0; i<rep; i++) {
            arr.push(Array(row).fill(0))
        }
    } else if (col > row) {
        const rep = col-row
        for(let i=0; i<rep; i++) {
            arr.forEach(row=>{
            row.push(0)
            })
        }
    }
    return arr;
}