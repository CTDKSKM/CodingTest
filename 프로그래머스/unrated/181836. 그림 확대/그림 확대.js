function solution(picture, k) {
    picture = picture.map((str, idx)=>{
        let tempStr = ''
        for(w of str) {
            tempStr += w.repeat(k)
        }
        return tempStr
    })
    const answer = new Array(picture.length*k).fill(0).map((v, idx) =>
        idx % k == 0 ? v=picture.shift() : 0
    );
    
    return answer.map((str,idx)=>{
        if (idx%k != 0) {
            const temp = idx%k
            return answer[idx-temp]
        } else return str
    })
}