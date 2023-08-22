function solution(numbers) {
    const largest = numbers.sort((a, b) => {
        const order1 = `${a}${b}`;
        const order2 = `${b}${a}`;
        return order2.localeCompare(order1);
    }).join('');

    if (largest[0] === '0') {
        return '0';
    }

    return largest;
}