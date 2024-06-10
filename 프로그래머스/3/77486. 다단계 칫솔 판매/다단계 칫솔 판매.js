function solution(enroll, referral, seller, amount) {
    const parents = new Map();
    const revenue = new Map();
    
    enroll.forEach((name, i) => {
        parents.set(name, referral[i]);
        revenue.set(name, 0);
    });

    seller.forEach((name, i) => {
        let profit = amount[i] * 100;
        while (name !== "-" && profit > 0) {
            let commission = Math.floor(profit * 0.1);
            let actualProfit = profit - commission;
            revenue.set(name, revenue.get(name) + actualProfit);
            name = parents.get(name);
            profit = commission;
        }
    });

    return enroll.map(name => revenue.get(name));
}
