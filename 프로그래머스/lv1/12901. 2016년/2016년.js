function solution(a, b) {
    const firstDay = [null,"FRI","MON","TUE","FRI","SUN","WED","FRI","MON","THU","SAT","TUE","THU"]
    const answer = ["SUN","MON","TUE","WED","THU","FRI","SAT","SUN","MON","TUE","WED","THU","FRI","SAT"]

    return answer[answer.indexOf(firstDay[a])+b%7-1 >= 0 ? answer.indexOf(firstDay[a])+b%7-1 : answer.length-1];
}