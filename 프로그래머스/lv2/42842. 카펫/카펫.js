function solution(brown, yellow) {
    let sumOfHorizonAndVertical = (brown - 4)/2;
    for (let i=1; i < sumOfHorizonAndVertical; i++) {
        if ((sumOfHorizonAndVertical - i)*i === yellow) {
            return [sumOfHorizonAndVertical - i + 2, i + 2];
        }
    }
}
