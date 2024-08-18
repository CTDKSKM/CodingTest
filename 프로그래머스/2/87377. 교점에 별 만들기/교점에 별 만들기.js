function contact(arr, arr2){ // 교점 알고리즘
    const [a,b,e] = [arr[0], arr[1], arr[2]];
    const [c,d,f] = [arr2[0], arr2[1], arr2[2]];

    const x = (b*f - e*d) / (a*d - b*c)
    const y = (e*c - a*f) / (a*d - b*c)

    const contactXY = {x: x, y: y}
    return contactXY; // 교점 리턴
}

function isInteger(number)  {
    return number % 1 === 0; // 정수 확인
}

function arrStar(arr){
    let [minX, minY, maxX, maxY] = [Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,
                                    Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER];

    arr.map((value) => {
        minX = Math.min(minX, value.x);
        minY = Math.min(minY, value.y);
        maxX = Math.max(maxX, value.x);
        maxY = Math.max(maxY, value.y);
    })

    return [minX,maxX,minY,maxY];
}

function solution(line) {
    let stack = [];
    let overlap = [];
    for(let i = 0; i < line.length; i++){
        for(let j = i+1; j < line.length; j++){
            const result = contact(line[i], line[j]);
            if(isInteger(result.x) && isInteger(result.y) && !overlap.includes(String(result.x)+String(result.y))){ 
                stack.push(result);
                overlap.push(String(result.x)+String(result.y));
            } // x,y는 정수, stack에 이미 해당 x,y 좌표가 있으면 no push
        }
    }
    let arr = arrStar(stack);
    let answer = [];
    // console.log(stack)
    for(let i = arr[2]; i <= arr[3]; i++){
        let str = '';
        for(let j = arr[0]; j <= arr[1]; j++){
            str += "."
            for(let k = 0; k < stack.length; k++){ // stack 돌면서 x,y 좌표 맞는 곳이면 "*"로 대체 
                if(stack[k].x === j && stack[k].y === i){
                    str = str.slice(0, -1);
                    str += "*";
                }
            }

        }
        // console.log(str);
        answer.push(str);
    }
    return answer.reverse();
}