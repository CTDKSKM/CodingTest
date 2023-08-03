function solution(people, limit) {
    people.sort((a,b)=>a-b)
    let boats = 0;
    for(let i=0; i<people.length; i++) {
        if (people[i] + people[people.length-1] <= limit) {
            people.pop()
            boats++
        } else {
            people.pop()
            boats++
            i--
        }
    }
    return boats
}