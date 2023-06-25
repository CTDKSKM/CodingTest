function solution(my_string) {
    return my_string.split(' ').reduce((a,c,idx)=>{
        if (idx%2 == 1) return a+c
        else if (a[a.length-1] == '+') return +a.slice(0,a.length-1) + +c
        else return +a.slice(0,a.length-1) - +c
    });
}