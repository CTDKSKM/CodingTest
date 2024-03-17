function solution(places) {
    const answer = [];
    
    const isSafe = (place) => {
        const dx = [0, 1,  0, -1];
        const dy = [1, 0, -1,  0];
        
        for (let y = 0; y < 5; y++) {
            for (let x = 0; x < 5; x++) {
                if (place[y][x] == 'P') {
                    for (let i = 0; i < 4; i++) {
                        const nx = x + dx[i];
                        const ny = y + dy[i];
                        
                        if (nx < 0 || ny < 0 || nx > 4 || ny > 4 || place[ny][nx] == 'X') continue;
                        
                        if (place[ny][nx] == 'B' || place[ny][nx] == 'P') {
                            return false;
                        };
                        place[ny][nx] = 'B';
                    }
                }
            }
        }
        
        return true;
    }
    
    places.forEach((place)=>{
        isSafe(place.map(v=>[...v])) ? answer.push(1) : answer.push(0)
    })
    
    return answer;
}

/*
*/