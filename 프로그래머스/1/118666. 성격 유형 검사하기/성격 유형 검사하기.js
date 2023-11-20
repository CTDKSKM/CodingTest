function solution(survey, choices) {
    const MBTI = {};
    const types = ["RT","CF","JM","AN"];

    types.forEach((type) =>
        type.split('').forEach((char) => MBTI[char] = 0)
    )

    choices.forEach((choice, index) => {
        const [disagree, agree] = survey[index];

        MBTI[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
    });

    return types.map(([a, b]) => MBTI[b] > MBTI[a] ? b : a).join("");
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