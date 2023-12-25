function solution(data, col, row_begin, row_end) {
    let bit = '';

    data.sort((a, b) => {
        if (a[col - 1] > b[col - 1]) {
            return 1;
        } else if (a[col - 1] === b[col - 1]) {
            if (b[0] > a[0]) return 1;
            else return -1;
        } else return -1;
    });

    for (let i = row_begin; i <= row_end; i++) {
        const sum = data[i - 1].reduce((a,c)=>a + (c%i),0);
        let nowBit = sum.toString(2);
        if (bit.length) {
            const len = Math.max(bit.length, nowBit.length);
            const arr = [];
            if (bit.length !== len) {
                bit = '0'.repeat(len - bit.length) + bit;
            } else {
                nowBit = '0'.repeat(len - nowBit.length) + nowBit;
            }
            for (let j = 0; j < len; j++) {
                bit[j] !== nowBit[j] ? arr.push('1') : arr.push('0');
            }
            bit = arr.join('');
        } else bit = nowBit;
    }
    return parseInt(bit, 2);
}