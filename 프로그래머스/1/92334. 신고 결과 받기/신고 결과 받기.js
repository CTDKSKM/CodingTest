function solution(id_list, report, k) {
    const users = new Map();
    const reporters = new Map();
    for (const user of id_list) users.set(user, 0)
    
    for (const val of report) {
        const [user, reporter] = val.split(' ')
        
        if (reporters.has(reporter)) {
            if (!reporters.get(reporter).includes(user)) {
                reporters.set(reporter, [...reporters.get(reporter),user])
            }
        }
        else {
            reporters.set(reporter, [user])
        }
    }
    
    for (const val of reporters) {
        const [reporter, uids] = val
        if (uids.length >= k) {
            for(const user of uids) {
                users.set(user, users.get(user) + 1)
            }
        }
    }
    
    return Array(...users).map(val=>val[1])
}

//피신고자에 신고자 매핑. size >= k 일 시 신고자들 cnt++ 
/*
신고 횟수 제한 X, 동일 유저에 대한 신고 중복 불가
K번 이상 신고된 유저는 이용 정지 + 해당 유저 신고자에게 정지사실 메일발송.
*/