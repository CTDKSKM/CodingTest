function solution(cards) {
    const cardsCopy = cards.slice();
    const groupSizes = [];

    for (let i = 0; i < cards.length; i++) {
        if (cardsCopy[i] == 0) continue;
        let size = 0, j = i + 1;

        while(cardsCopy[j - 1] != 0) {
            size += 1;
            let nextJ = cardsCopy[j - 1];
            cardsCopy[j - 1] = 0;
            j = nextJ;

        }
        groupSizes.push(size);
    }
    let max = 0, second = 0;
    groupSizes.forEach(s => {
        if (s > max) {
            second = max;
            max = s;
        } else if (s > second) second = s;
    });

    return max * second;
}