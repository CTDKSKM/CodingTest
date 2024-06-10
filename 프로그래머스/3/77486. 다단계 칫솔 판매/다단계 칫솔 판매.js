function solution(enroll, referral, seller, amount) {
    const sells = seller.reduce((sells, sell, i) => ((sells[sell] = sells[sell] || []).push(amount[i] * 100), sells), {})
    const members = enroll.reduce((members, member, i) => (members[member] = {
        parent: members[referral[i]] || null,
        sells: sells[member] || [],
        profit: 0,
    }, members), {})

    for (let member of Object.values(members)) {
        for (let sell of member.sells) {
            let profit = sell
            let currentMember = member

            while (currentMember && profit) {
                let parentProfit = Math.floor(profit / 10)
                let myProfit = profit - parentProfit

                currentMember.profit += myProfit

                currentMember = currentMember.parent
                profit = parentProfit
            }
        }
    }

    return enroll.map(member => members[member].profit)
}
