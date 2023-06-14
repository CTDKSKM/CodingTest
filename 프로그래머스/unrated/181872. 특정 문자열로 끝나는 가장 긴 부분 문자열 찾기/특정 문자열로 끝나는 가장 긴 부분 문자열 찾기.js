function solution(myString, pat) {
    return myString.slice(0,pat.length != 1 ? myString.lastIndexOf(pat)+1+pat.length-1 : myString.lastIndexOf(pat)+1)
}