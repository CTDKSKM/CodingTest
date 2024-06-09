function solution(plans) {
    const answer = [];
    const stop = [];

    plans = plans.map(v => { v[1] = v[1].split(":").reduce((acc, cur) => 60*Number(acc) + Number(cur)); v[2] = Number(v[2]); return v; }).sort((a, b) => a[1] - b[1]);

    let [curr, time, last] = plans[0];
    let i = 1;
    while(i < plans.length)
    {
        let next = plans[i];
        if(last > next[1] - time)
        {
            last -= next[1] - time;
            stop.push([curr, last]);
        }
        else
        {
            answer.push(curr);
            if(stop.length > 0)
            {
                const tmp = stop.pop();
                [curr, time, last] = [tmp[0], time+last, tmp[1]];
                continue;
            }
        }

        [curr, time, last] = next;
        i++;
    }

    answer.push(plans.pop()[0]);
    while(stop.length > 0)
        answer.push(stop.pop()[0]);

    return answer;
}
