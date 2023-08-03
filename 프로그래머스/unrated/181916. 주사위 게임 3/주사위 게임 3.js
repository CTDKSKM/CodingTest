function solution(...args) {
    const dice = new Array(6).fill(0)

    for(let i=0; i<args.length; i++) {
        dice[args[i]-1]++
    }

    if (dice.includes(4)) return 1111*(dice.indexOf(4)+1)

    if (dice.includes(3)) return (10*(dice.indexOf(3)+1)+(dice.indexOf(1)+1))**2

    if (dice.filter(v=>v==2).length==2) return ((dice.indexOf(2)+1)+(dice.lastIndexOf(2)+1))*Math.abs((dice.indexOf(2)+1)-(dice.lastIndexOf(2)+1))
    else if (dice.filter(v=>v==2).length==1) return (dice.indexOf(1)+1)*(dice.lastIndexOf(1)+1)
    else return dice.indexOf(1)+1;
}