function solution(m, musicinfos) {
    var answer = '';
    m = convertMelody(m)
    musicinfos = musicinfos.map((info,idx)=>{
        const [s,e,name, melody] = info.split(',')
        const playTime = calcTime(s,e)
        const playedMelody = []
        
        const realMelody = convertMelody(melody)
        for(let i=0; i<playTime; i++) {
            playedMelody.push(realMelody[i%realMelody.length])
        }
        
        return [idx,playTime,name,checkMelody(m,playedMelody)]
    })
    if (musicinfos.filter(val=>val[3]).length) 
        return musicinfos.filter(val=>val[3]).sort((a,b)=>b[1]-a[1])[0][2]
    
    return '(None)'
}
function convertMelody(melody) {
    return [...melody].map((str,idx)=>{
            if (melody[idx+1] === '#') return str+'#'
            if (str === '#') return null
            return str
        }).filter(val=>val)
}
function calcTime(start,end) {
    const [sH,sM] = start.split(':');
    const [eH,eM] = end.split(':');
    return (eH-sH)*60 + (eM-sM)
}
function checkMelody(memo, melody) {
    let flag = false
    let len = memo.length
    melody.forEach((str,idx)=>{
        if (str === memo[0]) {
            if (melody.slice(idx,idx+len).join('') === memo.join('')) flag = true
        }
    })
    return flag
}
/*

*/