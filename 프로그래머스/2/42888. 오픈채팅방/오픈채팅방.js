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
        let msg;
        switch(action) {
            case 'Enter':
                msg = '님이 들어왔습니다.'
                answer.push(`${user[uid]}${msg}`)
                break
            case 'Leave':
                msg = '님이 나갔습니다.'
                answer.push(`${user[uid]}${msg}`)
                break
            default:
                break
        }
    })

    return answer;
}