function solution(arr, location) {
    let answer = 0

    let temp = arr.slice()

    for(let i=0; i<arr.length; i++) {
        for(let j=0; j<temp.length; j++) {
            if (temp[0] !== Math.max(...temp)) {
                temp.push(temp.shift());
                location == 0 ? location += temp.length-1 : location--; 
                continue
            }
            answer++
            temp.shift()
            if (location === 0) {
                return answer
            }
            location--;
        }
    }
    
    return answer
}

