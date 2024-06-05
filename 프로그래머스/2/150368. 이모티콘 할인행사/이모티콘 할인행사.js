function solution(users, emoticons) {
    let bestResult = [0, 0];
    const discountRates = [10, 20, 30, 40];
    const numOfEmoticons = emoticons.length;

    // 4의 거듭제곱만큼 반복 (할인율 경우의 수)
    for (let i = 0; i < Math.pow(4, numOfEmoticons); i++) {
        let currentResult = [0, 0];
        const discountPattern = i.toString(4).padStart(numOfEmoticons, '0');
        const discountPrices = Array(numOfEmoticons).fill(0);

        // 각 이모티콘에 대한 할인 가격 계산
        for (let j = 0; j < numOfEmoticons; j++) {
            const discountRate = discountRates[discountPattern[j]];
            discountPrices[j] = emoticons[j] * (100 - discountRate) / 100;
        }

        // 유저별로 구매 여부 및 구매 금액 계산
        users.forEach(([minDiscount, maxPrice]) => {
            let totalSpent = 0;
            discountPrices.forEach((price, index) => {
                if (discountRates[discountPattern[index]] >= minDiscount) {
                    totalSpent += price;
                }
            });
            if (totalSpent >= maxPrice) {
                currentResult[0]++;
            } else {
                currentResult[1] += totalSpent;
            }
        });

        // 최적 결과 갱신
        if (currentResult[0] > bestResult[0] || 
            (currentResult[0] === bestResult[0] && currentResult[1] > bestResult[1])) {
            bestResult = currentResult;
        }
    }

    return bestResult;
}
