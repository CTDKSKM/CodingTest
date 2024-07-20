function solution(scores) {
    let answer = 1;
    let scoreIndex = {};
    let my_score = scores[0][0] + scores[0][1];

    const addScoreIndex = (first, second) => {
        if(!scoreIndex[first])  scoreIndex[first] = [];
        scoreIndex[first].push(second);
    }

    for(let score of scores)    addScoreIndex( ... score );
    let keys = Object.keys(scoreIndex);

    keys.sort((a, b) => b - a);
    let max = 0;

    for(let key of keys){
        key = Number(key);
        let new_max = max;
        if(key === scores[0][0] && max > scores[0][1])  return -1;
        for(let i = 0; i < scoreIndex[key].length; i++){
            if(scoreIndex[key][i] > new_max)    new_max = scoreIndex[key][i];
            else if(scoreIndex[key][i] < max)    continue;
            if(scoreIndex[key][i] + key > my_score) answer++;
        }
        max = new_max;
    }
    return answer;
}