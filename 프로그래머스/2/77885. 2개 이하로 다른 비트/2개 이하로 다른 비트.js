function solution(numbers) {
    return numbers.map(num=>{
        const bit = num.toString(2)
        const len = bit.length;
        let check = len;
        let newBit;
        [...bit].forEach(v=>{
            if (v==1) check--
        })
        if (check) {
            for(let i=len-1; i>=0; i--) {
                if (bit[i] == 0) {
                    const back = bit.slice(i+1)[0] ? '0'+bit.slice(i+2) : bit.slice(i+1)
                    newBit = bit.slice(0, i) + 1 + back
                    break
                }
            }
        }
        else {
            newBit = 10 + bit.slice(1)
        }
        return parseInt(newBit,2)
    });
}