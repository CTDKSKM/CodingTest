function solution(myStr) {
    var answer = myStr.replaceAll("a"," ").replaceAll("b"," ").replaceAll("c"," ").split(' ').filter(v=>v);
    return answer.length ? answer : ["EMPTY"];
}