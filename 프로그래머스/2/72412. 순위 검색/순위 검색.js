function generateCombinations(arrays) {
    let results = [''];

    for (let i = 0; i < arrays.length; i++) {
        let tempResults = [];
        for (let j = 0; j < results.length; j++) {
            for (let k = 0; k < arrays[i].length; k++) {
                tempResults.push(results[j] + arrays[i][k]);
            }
        }
        results = tempResults;
    }

    return results;
}
function solution(info, query) {
    const dict = {};
    
    info.forEach(entry => {
        const [lang, work, exp, soulfood, score] = entry.split(' ');
        const scoreValue = parseInt(score, 10);
        const combinations = generateCombinations([
            [lang, '-'],
            [work, '-'],
            [exp, '-'],
            [soulfood, '-']
        ]);
        
        combinations.forEach(comb => {
            if (!dict[comb]) dict[comb] = [];
            dict[comb].push(scoreValue);
        });
    });
    
    for (let key in dict) {
        dict[key].sort((a, b) => a - b);
    }
    
    const ans = [];
    query.forEach(q=>{
        const [lang, work, exp, rest] = q.split(' and ');
        const [soulfood, minScore] = rest.split(' ');
        const searchKey = lang + work + exp + soulfood;
        const scores = dict[searchKey] || [];

        let left = 0;
        let right = scores.length;

        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (scores[mid] >= minScore) right = mid;
            else left = mid + 1;
        }

        ans.push(scores.length - left);
    })

    return ans;
}
/*
[개발언어, 직군, 경력, 소울푸드, 점수] = info.split(' ')  1 이상 50,000 이하
개발언어 = cpp | java | python
직군 = backend | frontend
경력 = junior | senior
소울푸드 = chicken | pizza
점수 = 1 이상 100,000 이하

[개발언어, 직군, 경력, 소울푸드, 점수] = query.split('and')  1 이상 100,000 이하
'-' 표시는 해당 조건을 고려하지 않겠다는 의미
*/