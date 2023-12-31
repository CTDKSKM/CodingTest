function solution(today, terms, privacies) {
    var answer = [];
    let calculatedDateArray = []
    let valid = []

    //calculatedDateArray에 보관가능유효날짜 반환
    for(let i=0; i<privacies.length; i++) {
        terms.forEach(v=>v.includes(privacies[i].split(' ')[1]) ? valid.push(v.slice(2)) : false)
        let submittedDayArray = privacies[i].split(' ')[0].split('.')
        let addedMonth = +submittedDayArray[1] + +valid[i]
        //MM 12 초과부분 year/month 수정해주기
        if (addedMonth > 12) {
            let 곱하기 = 0;
            for(let j=0; addedMonth > 12; j++, addedMonth -= 12) {
                곱하기 += 1
            }
            submittedDayArray[0] = +submittedDayArray[0] + 1*곱하기
            submittedDayArray[1] = +`${+submittedDayArray[1] + +valid[i] - 12*곱하기}`
        } else {
            submittedDayArray[0] = +submittedDayArray[0]
            submittedDayArray[1] = +`${+submittedDayArray[1] + +valid[i]}`
        }

        //day부분 1일시 month/day 수정해주기
        if (+submittedDayArray[2] === 1) {
            submittedDayArray[1] = +submittedDayArray[1] - 1
            submittedDayArray[2] = 28
        } else {
            submittedDayArray[2] = +submittedDayArray[2] - 1
        }
        calculatedDateArray.push(submittedDayArray)
    }

    //today와 calculatedDateArray의 날짜 비교
    for(let i=0; i<privacies.length; i++) {
        let todayArray = today.split('.')
        let calculatedDate = calculatedDateArray[i]

        //오늘보다 계산된날짜가 <빠르면>!! 폐기.
        if (+todayArray[0] > calculatedDate[0]) {
            answer.push(i+1)
        } else if (+todayArray[0] == calculatedDate[0]) {
            if (+todayArray[1] > calculatedDate[1]) {
                answer.push(i+1)
            } else if (+todayArray[1] == calculatedDate[1]) {
                if (+todayArray[2] > calculatedDate[2]) {
                    answer.push(i+1)
                }
            }
        }
    }
    return answer
}
