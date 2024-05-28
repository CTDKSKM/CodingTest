function solution(cards) {
    var answer = 0;
    var d = Array.from({length: cards.length}, () => 0);
    var arr = [];

    for(var i=0;i<cards.length;i++){
        if(d[i] == 1) continue;

        var queue = [cards[i]]; d[i] = 1;
        var cnt = 1;
        while(queue.length>0){
            var num = queue.shift();
            if (d[num-1] == 0) {
                queue.push(cards[num-1]);
                d[num-1] = 1;
                cnt++;
            }
        }
        arr.push(cnt);
    }
    arr.sort((a,b) => b-a);

    return arr.length == 1 ? 0 : arr[0] * arr[1];
}