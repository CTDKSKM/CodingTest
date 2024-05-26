function solution(relation) {
    const all = [];
    const col = relation[0].length;
    const row = relation.length;
    const allCombinations = [];
    
    const getCombinations = (prefix, length, start) => {
        if (prefix.length === length) {
            allCombinations.push(prefix);
            return;
        }
        
        for (let i = start; i < col; i++) {
            getCombinations(prefix + i, length, i + 1);
        }
    }

    for (let i = 1; i <= col; i++) {
        getCombinations('', i, 0);
    }
    
    const uniqueCombinations = [];
    allCombinations.forEach((comb) => {
        const sets = new Set();
        relation.forEach((tuple) => {
            const key = comb.split('').map(c => tuple[parseInt(c)]).join('|');
            sets.add(key);
        });
        if (sets.size === row) uniqueCombinations.push(comb);
    });
    
    uniqueCombinations.sort((a, b) => a.length - b.length);
    
    const candidateKeys = [];
    uniqueCombinations.forEach((comb) => {
        if (candidateKeys.every(key => !key.split('').every(char => comb.includes(char)))) {
            candidateKeys.push(comb);
        }
    });
    
    return candidateKeys.length;
}