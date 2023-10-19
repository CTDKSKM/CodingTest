function solution(record) {
    const answer = [];
    const user = {};
    
    record.forEach(val=>{
        const [action, uid, name] = val.split(' ')
        switch (action) {
            case 'Enter':
                user[uid] = name
                break
            case 'Change':
                user[uid] = name
                break
            default:
                break
        }
    })
    
    record.forEach(val=>{
        const [action, uid, name] = val.split(' ')
        switch(action) {
            case 'Enter':
                answer.push(`${user[uid]}님이 들어왔습니다.`)
                break
            case 'Leave':
                answer.push(`${user[uid]}님이 나갔습니다.`)
                break
            default:
                break
        }
    })
    
    return answer;
}