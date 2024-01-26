const isPossible = (bannedId, userId) => {
    if (userId.length !== bannedId.length) return false;
    for (let i = 0; i < bannedId.length; i++) {
        if (bannedId[i] === '*' || bannedId[i] === userId[i]) continue;
        return false
    }
    return true;
};

const createIdInfos = (userIds, bannedIds, isPossible) => {
    const result = new Array(bannedIds.length).fill(null).map(el => new Set());

    for (const bIdx in bannedIds) {
        for (const uIdx in userIds) {
            if (!isPossible(bannedIds[bIdx], userIds[uIdx])) continue;
            if (result[bIdx].has(uIdx)) continue;
            result[bIdx].add(uIdx);
        }
    }
    return result;
};

const getCount = (idInfos, bIdx = 0, idVisited = [], caseVisited = new Set()) => {
    if (bIdx === idInfos.length) {
        const visit = idVisited.reduce((acc, visited, i) => {
            if (!visited) return acc;
            return acc + i;
        }, '');
        if (caseVisited.has(visit)) return 0;
        caseVisited.add(visit);
        return 1;//visit.length === idInfos.length ? 1 : 0;
    }

    let result = 0;
    for (const uIdx of idInfos[bIdx]) {
        if (idVisited[uIdx]) continue;
        idVisited[uIdx] = true;
        result += getCount(idInfos, bIdx + 1, idVisited, caseVisited);
        idVisited[uIdx] = false;
    }
    return result;
};

const solution = (userIds, bannedIds) => {
    const idInfos = createIdInfos(userIds, bannedIds, isPossible);
    return getCount(idInfos);
};