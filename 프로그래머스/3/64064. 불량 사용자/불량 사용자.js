const isUsed = {}
const usedSets = new Set();
const current = [];

function solution(user_id, banned_id, bannedIdx = 0) {
    const bannedLen = banned_id.length;
    if (bannedIdx === bannedLen) {
        const sorted = current.slice().sort().toString();
        if (usedSets.has(sorted)) {
            return 0;
        }

        usedSets.add(sorted);
        return 1;
    }

    const regex = new RegExp(banned_id[bannedIdx].replace(/\*/g, '.'));
    const matches = user_id.filter(user => {
        const result = regex.exec(user);
        return result && result[0].length === user.length;
    });

    let ret = 0;
    for (const user of matches) {
        if (!isUsed[user]) {
            isUsed[user] = true;
            current[bannedIdx] = user;
            ret += solution(user_id, banned_id, bannedIdx + 1);
            isUsed[user] = false;
        }
    }

    return ret;
}