function solution(id_list, report, k) {
    let reports = [...new Set(report)].map(a=>{return a.split(' ')});
    let counts = new Map();
    for (const bad of reports){
        counts.set(bad[1],counts.get(bad[1])+1||1)
    }
    let good = new Map();
    for(const report of reports){
        if(counts.get(report[1])>=k){
            good.set(report[0],good.get(report[0])+1||1)
        }
    }
    let answer = id_list.map(a=>good.get(a)||0)
    return answer;
}

//피신고자에 신고자 매핑. size >= k 일 시 신고자들 cnt++ 
/*
신고 횟수 제한 X, 동일 유저에 대한 신고 중복 불가
K번 이상 신고된 유저는 이용 정지 + 해당 유저 신고자에게 정지사실 메일발송.
*/