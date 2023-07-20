function solution(babbling) {
    const auntSays = ["aya", "ye", "woo", "ma"];
    return babbling.map(str=>{
    for(let i=0; i<auntSays.length; i++) {
        str.includes(auntSays[i]) ? str = str.replaceAll(auntSays[i], ' ') : str
    }
        return str
    }).map(str=>str.replaceAll(' ', '')).filter(v=>!v).length
}