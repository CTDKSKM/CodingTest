function solution(s)
{
    const arr = []
    for(let i=0; i<s.length; i++) {
        if (arr.length) {
            arr[arr.length-1] == s[i] ? arr.pop() : arr.push(s[i])
        } else arr.push(s[i])
    }
    return arr.length ? 0 : 1
//     s = [...s]

//     if (s.length % 2) return 0

//     return s.reduce((acc,cur)=>acc[acc.length-1]==cur?acc.slice(0,-1):acc+cur) ? 0 : 1
}
