function solution(priorities, location) {
    var answer = 0;

    while(priorities.length > 0) {
        let job = priorities.shift();
        if(priorities.some(i => i > job)) {
            priorities.push(job);
            if(location == 0) location = priorities.length - 1;
            else location--;
        }
        else {
            answer++;
            if(location == 0) return answer;
            else location--;
        }
    }

    return answer;
}