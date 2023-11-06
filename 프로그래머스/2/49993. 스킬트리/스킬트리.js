function solution(skill, skill_trees) {
    var answer = 0;
    return vaildSkillTree(skill, skill_trees);
}


const vaildSkillTree = (skillTree, usersSkillTrees)=>{

    const onlYneedSkills = usersSkillTrees.map(it=>{
        return it.split('').filter(ch => skillTree.includes(ch)).join('');
    });

    const filter = onlYneedSkills.map(element => {
        if(element === '') return true
        if(element[0] != skillTree[0]) return false
        return skillTree.includes(element);
    });

    return filter.filter(it => it).length
};