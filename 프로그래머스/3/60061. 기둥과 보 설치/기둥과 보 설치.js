function solution(n, build_frame) {
    const answer = [];
    const d = new Array(n+1).fill().map(()=>new Array(n+1).fill().map(()=>new Array(2).fill(0)))
    
    const build = (frame) => {
        const [x, y, a, b] = frame;
        const ele = a ? '보' : '기둥';
        const act = b ? '설치' : '삭제';
        switch (ele+act) {
            case '보설치':
                if (check보(x,y)) d[x][y][1] = 1;
                break;
                
            case '보삭제':
                d[x][y][1] = 0;
                if (!deleteEle(x, y)) d[x][y][1] = 1;
                break;
                
            case '기둥설치':
                if (check기둥(x,y)) d[x][y][0] = 1;
                break;
                
            case '기둥삭제':
                d[x][y][0] = 0;
                if (!deleteEle(x, y)) d[x][y][0] = 1;
                break;
        }
    }
    
    const check보 = (x, y) => {
        if (x < 0 || x >= n || y <= 0 || y > n) return false;
        if (d[x][y-1][0] || (x+1 <= n && d[x+1][y-1][0]) || (x > 0 && x+1 <= n && d[x-1][y][1] && d[x+1][y][1])) return true;
        return false;
    }
    
    const check기둥 = (x, y) => {
        if (y < 0 || y > n || x < 0 || x > n) return false;
        if (y == 0 || d[x][y][1] || (x > 0 && d[x-1][y][1]) || (y > 0 && d[x][y-1][0])) return true;
        return false;
    }
    
    const deleteEle = (x, y) => {
        const check = checkAll();
        return check;
    }
    
    const checkAll = () => {
        for(let x=0; x<=n; x++) {
            for(let y=0; y<=n; y++) {
                const [기둥, 보] = d[x][y];
                if (기둥 && !check기둥(x,y)) return false;
                if (보 && !check보(x,y)) return false;
            }
        }
        return true;
    }
    
    build_frame.forEach(build);
    
    d.forEach((row, x) => {
        row.forEach(([기둥, 보], y) => {
            if (기둥) answer.push([x, y, 0]);
            if (보) answer.push([x, y, 1]);
        });
    });
    
    return answer;
}
