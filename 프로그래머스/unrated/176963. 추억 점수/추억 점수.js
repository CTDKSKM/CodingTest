function solution(name, yearning, photo) {
    return photo.map(characters=>characters.reduce((acc,cur)=>(yearning[name.indexOf(cur)] ?? 0) + acc,0));
}