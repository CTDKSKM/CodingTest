function solution(new_id) {
    const possible = 'abcdefghijklmnopqrstuvwxyz0123456789-_.'
    
    new_id = [...new_id].map(v=>v.toLowerCase()).filter(v=>possible.includes(v)).reduce((acc,cur)=>{
        if (acc.length && acc[acc.length-1] == '.' && cur == '.') return acc
        else return acc+cur
    },'');
    if (new_id[0] == '.') new_id = new_id.slice(1)
    if (new_id[new_id.length-1] == '.') new_id = new_id.slice(0,-1)
    if (!new_id.length) new_id += 'a'
    if (new_id.length >= 16) new_id = new_id.slice(0, 15)
    if (new_id[new_id.length-1] == '.') new_id = new_id.slice(0, -1)
    while (new_id.length < 3) {
        new_id += new_id[new_id.length-1]
    }
    
    return new_id;
}