function solution(n) {
    var answer = [];
    for(let i=0; i<n; i++) answer.push([])

    const position = {
        x: 0,
        y: 0
    }
    
    let direction = "right"

    for(let i=1; i<=n**2; i++) {
        answer[position.y][position.x] = i
        if (direction == "right") {
            position.x++
            if (answer[position.y][position.x]) {
                position.y++
                position.x--
                direction = "down"
                continue
            }
            if (position.x >= n-1) direction = "down"
        }
        else if (direction == "down") {
            position.y++
            if (answer[position.y][position.x]) {
                position.y--
                position.x--
                direction = "left"
                continue
            }
            if (position.y >= n-1) direction = "left"
        }
        else if (direction == "left") {
            position.x--
            if (answer[position.y][position.x]) {
                position.y--
                position.x++
                direction = "up"
                continue
            }
            if (position.x <= 0) direction = "up"
        }
        else if (direction == "up") {
            position.y--
            if (answer[position.y][position.x]) {
                position.y++
                position.x++
                direction = "right"
                continue
            }
            if (position.y <= 0) direction = "right"
        }
    }
    
    return answer
}
