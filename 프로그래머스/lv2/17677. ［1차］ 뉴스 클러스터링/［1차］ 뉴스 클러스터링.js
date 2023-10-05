function solution(str1, str2) {
    const arr1 = generateSubsets(str1);
    const arr2 = generateSubsets(str2);

    return calcJaccardSimilarity(arr1, arr2);
}

function generateSubsets(str) {
    const normalizedStr = str.toLowerCase();
    const subsets = [];

    for (let i = 0; i < normalizedStr.length - 1; i++) {
        const subset = normalizedStr.slice(i, i + 2);
        if (!/[a-z]{2}/.test(subset)) continue;
        subsets.push(subset);
    }

    return subsets.sort();
}

function calcJaccardSimilarity(arr1, arr2) {
    const union = new Map()
    const intersection = new Map()

    for (const element of arr1) {
        union.set(element, Math.max(union.get(element) || 0, arr1.filter(e => e === element).length));
    }
    for (const element of arr2) {
        union.set(element, Math.max(union.get(element) || 0, arr2.filter(e => e === element).length));
    }
    
    for (const element of arr1) {
        if (arr2.includes(element)) {
            const minCount = Math.min(arr1.filter(e => e === element).length, arr2.filter(e => e === element).length);
            intersection.set(element, minCount);
        }
    }
    const intersectionSize = [...intersection.values()].reduce((acc, val) => acc + val, 0);
    const unionSize = [...union.values()].reduce((acc, val) => acc + val, 0);

    return unionSize === 0 ? 65536 : Math.floor(intersectionSize / unionSize * 65536);
}