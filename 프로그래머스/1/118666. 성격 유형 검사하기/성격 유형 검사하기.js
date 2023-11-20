function solution(survey, choices) {
    let answer = '';
    const character = {
        'RT':[0,0],
        'CF':[0,0],
        'JM':[0,0],
        'AN':[0,0],
    }
    const check = ['RT','CF','JM','AN']
    const left = 'RCJA'
    const right = 'TFMN'
    survey.forEach((char,choice)=>{
        const [deny,allow] = char.split('')
        if (choices[choice] > 4) {
            const idx = check.map((c_case,idx)=>c_case.includes(allow) ? idx : -1).filter(v=>v!=-1)[0]
            if (left.includes(allow)) character[check[idx]][0] += choices[choice] % 4
            else character[check[idx]][1] += choices[choice] % 4 
        }
        else if (choices[choice] < 4) {
            const idx = check.map((c_case,idx)=>c_case.includes(deny) ? idx : -1).filter(v=>v!=-1)[0]
            if (left.includes(deny)) character[check[idx]][0] += (4-choices[choice])
            else character[check[idx]][1] += (4-choices[choice])
        }
    })
    for(const val in character) {
        const [c1, c2] = character[val]
        if (c1 >= c2) {
            answer += val[0]
        }
        else answer += val[1]
    }
    return answer;
}

/*
4개 지표로 성격 유형을 구분
각 지표에서 두 유형 중 하나로 결정됩니다.
성격 유형은 총 16(=2 x 2 x 2 x 2)가지 => "RFMN"이나 "TCMA"와 같은 유형
각 질문에는 7개의 선택지
choices	뜻
1	매우 비동의
2	비동의
3	약간 비동의
4	모르겠음
5	약간 동의
6	동의
7	매우 동의
servey[i][0] = 123 servey[i][1] = 567

모든 질문의 성격 유형 점수를 더하여 각 지표에서 더 높은 점수를 받은 성격 유형이 검사자의 성격 유형이라고 판단
*/