function solution(ingredient) {
    var answer = 0;
    const breadBox = []
    for(let i=0; i<ingredient.length-3; i++) {
        const isBurger = 
              '' + ingredient[i] + ingredient[i+1] + ingredient[i+2] + ingredient[i+3] == '1231' 
                ? true 
                : false
        if (isBurger) {
            answer++
            ingredient.splice(i, 4)
            i=breadBox.pop() || 0
            i--
            continue
        }
        if (ingredient[i] == 1) {
            breadBox.push(i)
        }
    }
    return answer;
}