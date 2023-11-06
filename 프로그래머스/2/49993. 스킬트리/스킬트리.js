function solution(skill, skill_trees) {
    const memo = new Map();

    skill_trees.forEach((tree,i)=>{
        if (tree.includes(skill[0])) memo.set(i, tree.indexOf(skill[0]))
        else memo.set(i, 27)
    })

    for(let i=1; i<skill.length; i++) {
        const nowSkill = skill[i]
        for(let j=0; j<skill_trees.length; j++) {
            const tree = skill_trees[j]
            const index = tree.indexOf(nowSkill)
            if (index == -1) {
                for(let k=i+1; k<skill.length; k++) {
                    const nextSkill = skill[k]
                    if (tree.includes(nextSkill)) {
                        memo.delete(j)
                        break
                    }
                }
                continue
            }

            if (memo.get(j) < index) memo.set(j, index)
            else memo.delete(j)
        }
    }

    return memo.size;
}