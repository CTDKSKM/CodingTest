function solution(cards) {
    let answer = 0;
    cards.unshift(0);
    const N = cards.length;
    
    for(let i=1; i<N; i++) {
        const firstOpened = new Array(N).fill(false);
        
        const firstBoxes = [i];
        
        const q = [cards[i]];
        firstOpened[i] = true;
        while ( q.length ) {
            const next = q.shift();
            
            if (!firstOpened[next]) {
                firstBoxes.push(next);
                firstOpened[next] = true;
                q.push(cards[next]);
            }
            else break
        }
        
        for(let j=1; j<N; j++) {
            if (firstOpened[j]) continue;
            const secondOpened = firstOpened.slice();
            
            const secondBoxes = [j];
            
            const q = [cards[j]];
            secondOpened[j] = true;
            while ( q.length ) {
                const next = q.shift();

                if (!secondOpened[next]) {
                    secondBoxes.push(next);
                    secondOpened[next] = true;
                    q.push(cards[next]);
                }
                else break
            }
            answer = Math.max(answer, firstBoxes.length*secondBoxes.length);
        }
    }
    return answer;
}
/*
열어야 하는 상자가 이미 열려있을 때까지 반복
1번 상자 그룹을 제외하고 남는 상자가 없으면 그대로 게임이 종료되며, 이때 획득하는 점수는 0점
그렇지 않다면 남은 상자 중 다시 임의의 상자 하나를 골라 같은 방식으로 이미 열려있는 상자를 만날 때까지 상자를 엽니다. 이렇게 연 상자들은 2번 상자 그룹

1번 상자 그룹에 속한 상자의 수와 2번 상자 그룹에 속한 상자의 수를 곱한 값이 게임의 점수
*/