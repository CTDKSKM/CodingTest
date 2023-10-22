function solution(begin, target, words) {
    var answer = 0;

    let map = {};
    [...words, begin].map(w => {
        map[w] = [];
        words.map(nw => {
            if(canChange(w, nw)) {
                map[w].push(nw);
            }
        });
    });

    let q = [begin];
    let distance = {};
    let visited = [begin];
    distance[begin] = 0;

    while(q.length > 0) {
        let word = q.shift();

        for(let i=0; i<map[word].length; i++) {
            let nei = map[word][i];
            if(visited.indexOf(nei) <= -1) {
                distance[nei] = distance[word] + 1;

                if(target == nei){
                    return distance[nei];
                }

                visited.push(nei);
                q.push(nei);
            }
        }
    }

    return answer;
}

function canChange(word, target) {
    let diff = 0;
    for(let i=0; i<word.length; i++) {
        if(word.charAt(i) != target.charAt(i)){
            diff++;
        }
    }
    if(diff == 1) return true;
    return false;
}