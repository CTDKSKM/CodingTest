function solution(n) {
    let result = new Array(n);
    for(let i = 0; i < result.length; i++){
        result[i] = new Array(n);
    }
    let direction = 1; 
    let x,y,num;
    x = y = num = 0;
    x--; 

    while(1) {

        for(let i = 0; i < n; i++){
            x += direction;
            result[y][x] = ++num; 
        }

        n--; 
        if(n == 0)break;


        for(let j = 0; j < n; j++){
            y += direction;
            result[y][x] = ++num;
        }
        direction *= -1;
    }

    return result;
}
