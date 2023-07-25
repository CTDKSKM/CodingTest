function solution(wallpaper) {
    var answer = [];
    const files = [];
    for(let i = 0; i< wallpaper.length; i++) {
        if (wallpaper[i].includes('#')) {
            answer.push(i)
            files.push(wallpaper[i].indexOf('#'))
            files.push(wallpaper[i].lastIndexOf('#'))
        }
    }
    return [Math.min(...answer), Math.min(...files), Math.max(...answer)+1, Math.max(...files)+1];
}
//[파일 있는 가장빠른 인덱스, 파일중 가장 빠른 인덱스, 파일있는 마지막 인덱스+1, 파일중 마지막인덱스+1]