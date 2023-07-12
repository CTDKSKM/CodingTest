function solution(n) {
    return [...n.toString(3)].reduce((acc,cur,idx)=>acc+(3**idx)*(+cur),0);
}