function solution(park, routes) {
    var answer = [];
    const W = park[0].length
    const H = park.length
    const robot = findInitPosition(park)

    //이동
    routes.forEach(val=>{
        const [dir, c] = val.split(" ")
        const num = +c
        const {x, y} = robot
        let nx, ny;
        //점검
        if (dir == "N") {
            nx = x
            ny = y-num
            let check = checkArea(nx, ny, W, H)
            if (check) {
                //장애물 점검
                for(let i=ny; i<y; i++) {
                    if (park[i][x] == 'X') {
                        check = false
                    }
                }
                if (check) {
                    robot.y = ny
                }
            }
        }
        else if (dir == "S") {
            nx = x
            ny = y+num
            let check = checkArea(nx, ny, W, H)
            if (check) {
                //장애물 점검
                for(let i=ny; i>y; i--) {
                    if (park[i][x] == 'X') {
                        check = false
                    }
                }
                if (check) {
                    robot.y = ny
                }
            }
        }
        else if (dir == "W") {
            nx = x-num
            ny = y
            let check = checkArea(nx, ny, W, H)
            if (check) {
                //장애물 점검
                for(let i=nx; i<x; i++) {
                    if (park[y][i] == 'X') {
                        check = false
                    }
                }
                if (check) {
                    robot.x = nx
                }
            }
        }
        else if (dir == "E") {
            nx = x+num
            ny = y
            let check = checkArea(nx, ny, W, H)
            if (check) {
                //장애물 점검
                for(let i=nx; i>x; i--) {
                    if (park[y][i] == 'X') {
                        check = false
                    }
                }
                if (check) {
                    robot.x = nx
                }
            }
        }
    })
    return [robot.y, robot.x];
}
function findInitPosition(park) {
    for(let i=0; i<park.length; i++) {
        if (park[i].includes("S")) {
            return { x: park[i].indexOf("S"), y: i }
        }
    }
}

//공원 벗어나는지?
function checkArea(x, y, totalX, totalY) {
    if (x >= 0 && x < totalX && y >= 0 && y < totalY) {
        return true;
    } else {
        return false;
    }
}


