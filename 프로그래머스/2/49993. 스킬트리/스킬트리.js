function solution(skill, skill_trees) {
    const memo = new Map();

    skill_trees.forEach((tree, i) => {
        const index = tree.indexOf(skill[0]);
        memo.set(i, index > -1 ? index : 27);
    });

    for (let i = 1; i < skill.length; i++) {
        const nowSkill = skill[i];
        for (let j = 0; j < skill_trees.length; j++) {
            const tree = skill_trees[j];
            const index = tree.indexOf(nowSkill);
            if (index > -1) {
                memo.get(j) < index ? memo.set(j, index) : memo.delete(j);
            } else {
                for (let k = i + 1; k < skill.length; k++) {
                    if (tree.includes(skill[k])) {
                        memo.delete(j);
                        break;
                    }
                }
            }
        }
    }

    return memo.size;
}
