function generateCombinations(arrays) {
    let results = [''];
    
    arrays.forEach(array => {
        let tempResults = [];
        results.forEach(result => {
            array.forEach(value => {
                tempResults.push(result + value);
            });
        });
        results = tempResults;
    });
    
    return results;
}
function solution(info, query) {
    const devLangs = ['cpp', 'java', 'python', '-'];
    const works = ['backend', 'frontend', '-'];
    const exps = ['junior', 'senior', '-'];
    const soulfoods = ['chicken', 'pizza', '-'];

    const sum = [devLangs, works, exps, soulfoods];
    const dict = {};

    info.forEach((v) => {
        const [lang, work, exp, soulfood, score] = v.split(' ');
        const scoreValue = parseInt(score, 10);
        const combinations = generateCombinations([
            [lang, '-'],
            [work, '-'],
            [exp, '-'],
            [soulfood, '-']
        ]);

        combinations.forEach(comb => {
            if (!dict[comb]) dict[comb] = new Array(100001).fill(0);
            dict[comb][scoreValue]++;
        });
    });

    // dp 배열을 통해 점수 이상의 인원 수를 계산
    for (let key in dict) {
        for (let i = 99999; i >= 0; i--) {
            dict[key][i] += dict[key][i + 1];
        }
    }

    const result = [];
    query.forEach(q => {
        const [lang, work, exp, rest] = q.split(' and ');
        const [soulfood, minScoreStr] = rest.split(' ');
        const minScore = parseInt(minScoreStr, 10);
        const searchKey = lang + work + exp + soulfood;
        const scores = dict[searchKey];

        if (scores) {
            result.push(scores[minScore]);
        } else {
            result.push(0);
        }
    });

    return result;
}
